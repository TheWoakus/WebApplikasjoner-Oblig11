import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import {NavStyle} from '../styled/Styled';

const StyledNav = styled.nav`
  width: 100%;
  padding: 1rem 0;
`;

const NavMenu = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavMenuItem = styled.li`
  padding: 0 20px;

  &:first-child {
    padding-left: 0px;
  }

  & > a {
    color: #333;
    display: block;
    text-decoration: none;

    &.active {
      border-bottom: 2px solid #333;
    }
  }
`;

const Nav = () => (
  <StyledNav>
    <NavMenu>
      <NavMenuItem>
        <NavLink exact to="/home" activeClassName="active">
          Home
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/new" activeClassName="active">
          New Poll
        </NavLink>
      </NavMenuItem>

      <NavMenuItem>
        <NavLink exact to="/signup" activeClassName="active">
          Sign up
        </NavLink>
      </NavMenuItem>
    </NavMenu>
  </StyledNav>
);

export default Nav;
