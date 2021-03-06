import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { adopt } from 'react-adopt';
import CartStyles from './styles/CartStyles';
import styled from 'styled-components';
import User from './User';
import CartItem from './CartItem';
import calcTotalPrice from '../lib/calcTotalPrice';
import formatMoney from '../lib/formatMoney';
import TakeMyMoney from './TakeMyMoney';

const Title = styled.h3`
  color: ${props => props.theme.red};
  display: inline-block;
  padding: 4px 5px;
  margin: 0;
  font-size: 2.5rem;
`;

const CloseButton = styled.button`
  background: black;
  color: white;
  font-size: 2rem;
  border: 0;
  position: absolute;
  z-index: 2;
  right: 0;
`;

const ButtonStyle = styled.button`
  background: ${props => props.theme.red};
  color: white;
  font-size: 2rem;
  padding: 1.5rem;
  width: 60%;
  border-radius: 0.5rem;
`;

const LOCAL_STATE_QUERY = gql`
  query {
    cartOpen @client #client-side data
  }
`;

const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`;

const Composed = adopt({
  user: ({ render }) => <User>{render}</User>,
  toggleCart: ({ render }) => <Mutation mutation={TOGGLE_CART_MUTATION}>{render}</Mutation>,
  localState: ({ render }) => <Query query={LOCAL_STATE_QUERY}>{render}</Query>,
});

const Cart = () => (
  <Composed>
    {({ user, toggleCart, localState }) => {
      const me = user.data.me;
      if (!me) return null;
      console.log(me);
      return (
        <CartStyles open={localState.data.cartOpen}>
          <header>
            <CloseButton onClick={toggleCart} title="close">
              &times;
            </CloseButton>
            <Title>Shopping Cart</Title>
            <p>You Have {me.cart.length} Item{me.cart.length === 1 ? '' : 's'} in your cart.</p>
          </header>
          <ul>
            {me.cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>)}
          </ul>
          <footer>
            <p>{formatMoney(calcTotalPrice(me.cart))}</p>
            {me.cart.length && (
              <TakeMyMoney><ButtonStyle>Pay Now</ButtonStyle></TakeMyMoney>
            )}
          </footer>
        </CartStyles>
      );
    }}
  </Composed>
);

export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };