import Link from 'next/link';
import { Mutation } from 'react-apollo';
import { TOGGLE_CART_MUTATION } from './Cart';
import NavStyles from './styles/NavStyles';
import { FiShoppingCart } from 'react-icons/fi';
import User from './User';
import Signout from './Signout';

const Nav = () => (
  <User>
    {({ data }) => {
      const me = data ? data.me : null
      return (
        <NavStyles>
          <Link href="/activities">
            <a>Activities</a>
          </Link>
          {me && (
            <>
              <Mutation mutation={TOGGLE_CART_MUTATION}>
                {(toggleCart) => (
              <button onClick={toggleCart}><FiShoppingCart /></button>
                )}
              </Mutation>
              <Link href="/me">
                <a>Account</a>
              </Link>
              <Signout />
            </>
          )}
          {!me && (
            <>
              <Link href="/login">
                <a>Log In</a>
              </Link>
              <Link href="/signup">
                <a>Sign Up</a>
              </Link>
            </>
          )}
      </NavStyles>
    )}
  }
  </User>
);
export default Nav;