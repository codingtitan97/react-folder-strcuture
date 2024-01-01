import React from 'react';
import { useCart } from '../../contexts/CartContext';
import CartItem from './CartItem';
import Button from '../common/Button';
import styled from 'styled-components';
const CartWrapper = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
`;

const CartSummary = () => {
  const { cart, clearCart } = useCart();

  return (
    <CartWrapper>
      <h2>Cart Summary</h2>
      {cart.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
      {cart.length > 0 && (
        <Button onClick={clearCart}>Clear Cart</Button>
      )}
    </CartWrapper>
  );
};

export default CartSummary;
