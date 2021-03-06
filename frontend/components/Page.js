import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  orange: '#FA9246',
  yellow: '#FF9B20',
  red: '#FF5722',
  green: '#009688',
  blue: '#84A1E2',
  black: '#424242',
  grey: '#E9E9E9',
  maxWidth: '1200px',
  bs: '1px 1px 1px rgba(0, 0, 0, 0.2)'
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

injectGlobal`
@font-face {
  font-family: 'segoe_ui';
  src: url('/static/Segoe UI.woff')
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
