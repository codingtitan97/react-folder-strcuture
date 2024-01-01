// src/components/Menu/MenuItem.js
import React from 'react';
import styled from 'styled-components';
import { useCart } from '../../contexts/CartContext';
import Button from '../common/Button';

const ItemWrapper = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;

const MenuItem = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <ItemWrapper>
      <div>
        <p>{item.name}</p>
        <p>${item.price}</p>
      </div>
      <Button onClick={() => addToCart(item)}>Add to Cart</Button>
    </ItemWrapper>
  );
};

export default MenuItem;
