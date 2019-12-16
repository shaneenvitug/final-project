import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import { FiShoppingCart } from 'react-icons/fi';

const Nav = () => (
  <NavStyles>
    <Link href="/activities">
      <a>Activities</a>
    </Link>
    <Link href="/shoppingcart">
      <a><FiShoppingCart /></a>
    </Link>
    <Link href="/login">
      <a>Log In</a>
    </Link>
    <Link href="/signup">
      <a>Sign Up</a>
    </Link>
  </NavStyles>
)

export default Nav;