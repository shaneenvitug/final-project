import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  orange: '#FA9246',
  yellow: '#FF9B20',
  red: '#F34711',
  green: '#009688',
  blue: '#84A1E2',
  black: '#424242',
  grey: '#E9E9E9',
  maxWidth: '1000px',
}

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'segoe_ui';
  src: url('/public/Segoe UI.woff')
  format('woff');
  font-weight: normal;
  font-style: normal;
}
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'segoe_ui';
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.black}
  }
`;

class Page extends Component {
  render() {
    return (
        <ThemeProvider theme={theme}>
        <GlobalStyle />
          <StyledPage>
            <Meta />
            <Header />
            <Inner>{this.props.children}</Inner>
          </StyledPage>
        </ThemeProvider>
    )
  }
}

export default Page;
