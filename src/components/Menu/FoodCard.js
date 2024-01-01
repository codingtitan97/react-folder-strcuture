// src/components/Menu/FoodCard.js
import React from 'react';
import styled from 'styled-components';
import { useCart } from '../../contexts/CartContext';
import Button from '../common/Button';

const CardWrapper = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  text-align: center;
`;

const FoodImage = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const FoodName = styled.p`
  font-weight: bold;
  margin-top: 8px;
`;

const FoodCard = ({ food }) => {
    const { addToCart } = useCart();
    return (
        <CardWrapper>
            <FoodImage src={food.image} alt={food.name} />
            <FoodName>{food.name}</FoodName>
            <p>${food.price}</p>
            <Button onClick={() => addToCart(food)}>Add to Cart</Button>
        </CardWrapper>
    );
};

export default FoodCard;
