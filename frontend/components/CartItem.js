import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import formatMoney from '../lib/formatMoney';
import RemoveFromCart from './RemoveFromCart';

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.grey};
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 10px;
  }
  h3,
  p {
    margin: 0;
  }
`;

const CartItem = ({ cartItem }) => (
  <CartItemStyles>
  <img width="100" src={cartItem.activity.image} alt={cartItem.activity.title} />
    <div className="cart-item-details">
      <h3>{cartItem.activity.title}</h3>
      <p>
        {formatMoney(cartItem.activity.price * cartItem.quantity)}
        {' - '}
        <em>
          {cartItem.quantity} &times; {formatMoney(cartItem.activity.price)} each
        </em>
      </p>
    </div>
    <RemoveFromCart id={cartItem.id} />
  </CartItemStyles>
);

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
};


export default CartItem;