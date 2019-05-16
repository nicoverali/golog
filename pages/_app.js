import React from 'react';
import App, {Container} from 'next/app';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider} from 'styled-components'
import MainLayout from '../layouts/MainLayout';
import theme from '../components/theme';

const GlobalStyle = createGlobalStyle`
  *{
    color: ${theme.color.textColor};
  }

  svg, path{
    fill: ${theme.color.textColor};
  }
  body {
    margin: 0px;
    overflow: hidden;
    background-image: url('static/images/${theme.background}');
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility:    hidden;
    -ms-backface-visibility:     hidden;
  }
`

export default class GologApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {};
    if(Component.getInitialProps){
      pageProps = await Component.getInitialProps(ctx);
    }
    return {pageProps};
  }

  render(){
    const { Component, pageProps } = this.props
    return (      
      <Container>
        <Head>
          <script src="http://localhost:3030/vendor/jquery/jquery-2.0.3.min.js"></script>
          <script src="http://localhost:3030/pengine/pengines.js"></script>
          <link href="https://fonts.googleapis.com/css?family=Arvo:400,700|Open+Sans:300,400,600,700" rel="stylesheet"/>
        </Head>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
          <MainLayout >
            <Component {...pageProps}/>
          </MainLayout>
        </ThemeProvider>
      </Container>
)
  }
}
