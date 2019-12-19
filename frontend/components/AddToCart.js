import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.theme.yellow};
  color: white;
  font-size: 1.8rem;
  padding: 1.3rem;
  width: 50%;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 2rem;
`;

const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`;

class AddToCart extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <Mutation
        mutation={ADD_TO_CART_MUTATION}
        variables={{
          id,
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(addToCart, {loading}) => <Button disabled={loading} onClick={addToCart}>Add{loading && 'ing'} To Cart</Button>}
      </Mutation>
    );
  }
}
export default AddToCart;