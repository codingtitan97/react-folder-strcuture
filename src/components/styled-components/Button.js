import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '35px'};
  background-color: rgb(240, 145, 51);
  color: white;
  text-align:center;
  border: none;
  border-radius:3px;
  padding: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = ({ ...props }) => {
    return <StyledButton {...props} />;
};

export default Button;
