import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import CartStyles from './styles/CartStyles';
import styled from 'styled-components';

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

const Cart = () => (
  <Mutation mutation={TOGGLE_CART_MUTATION}>
    {toggleCart => (
      <Query query={LOCAL_STATE_QUERY}>
        {({ data }) => (
          <CartStyles open={data.cartOpen}>
            <header>
              <CloseButton onClick={toggleCart} title="close">
                &times;
              </CloseButton>
              <Title>Shopping Cart</Title>
              <p>You Have __ Items in your cart.</p>
            </header>

            <footer>
              <p>$10.10</p>
              <ButtonStyle>Pay Now</ButtonStyle>
            </footer>
          </CartStyles>
        )}
      </Query>
    )}
  </Mutation>
);

export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };