import React from 'react';
import App, {Container} from 'next/app';
import MainLayout from '../layouts/MainLayout';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    overflow: hidden;
  }
`

export default class GologApp extends App {
  render(){
    const { Component, pageProps } = this.props
    return (
      <Container>
        <GlobalStyle/>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Container>
)
  }
}
