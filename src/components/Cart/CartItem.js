import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;

const CartItem = ({ item }) => {
  return (
    <ItemWrapper>
      <div>
        <p>{item.name}</p>
        <p>${item.price}</p>
      </div>
    </ItemWrapper>
  );
};

export default CartItem;
