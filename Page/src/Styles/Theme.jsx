import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';

const theme = {
  body: '#FFF',
};

const Theme = ({ children }) => {
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
};

export default Theme;
