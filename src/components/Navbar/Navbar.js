import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo>FoodApp</Logo>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/order">Order</NavLink>
        </NavItem>
      </NavList>
    </NavbarWrapper>
  );
};

export default Navbar;
