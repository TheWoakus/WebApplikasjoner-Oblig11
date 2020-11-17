import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  margin: 0 auto;
  width: 100%;
  padding: 0 4rem;
`;

export const StyledForm = styled.form`
  background: #fff;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  color: #000;
  background-color: #ddd;
  margin-bottom: 1rem;
  padding: 1.2rem;
  font-size: 1.6rem;
  border-radius: 3px;
  border: none;
  &::placeholder {
    color: #000;
  }
`;

export const StyledFormButton = styled.button`
  background: #fff;
`;