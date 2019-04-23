import React from 'react';
import App, {Container} from 'next/app';
import { createGlobalStyle, ThemeProvider} from 'styled-components'
import MainLayout from '../layouts/MainLayout';
import theme from '../components/theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    overflow: hidden;
    background-image: url('static/images/background.png');
  }
`

export default class GologApp extends App {
  render(){
    const { Component, pageProps } = this.props
    return (
      <Container>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ThemeProvider>
      </Container>
)
  }
}
