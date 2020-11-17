import React from 'react';
import styled from 'styled-components';

import { Container } from '../styled/Styled';
import Nav from '../components/nav';

const StyledHeader = styled.header`
  background: #fff;
  box-shadow: 1px 1px 2px #f5f5f5;
  margin-bottom: 60px;
  width: 100%;
  padding: 0 2rem;
`;

const MainLayoutContainer = styled.div`
  min-height: 100%;
  background-color: #fff;
`;

const MainLayout = ({ children }) => (
  <MainLayoutContainer>
    <StyledHeader>
      <Nav />
    </StyledHeader>
    <Container>{children}</Container>
  </MainLayoutContainer>
);

export default MainLayout;
