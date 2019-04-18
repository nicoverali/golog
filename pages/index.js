import {Fragment} from 'react';
import {ThemeProvider} from 'styled-components';
import theme from '../components/theme';
import Head from 'next/head';

import MainSection from '../components/MainSection';
import TextSectionBody from '../components/TextSectionBody';
import PrimaryButton from '../components/PrimaryButton';

export default class App extends React.Component{

  render(){
    return (
      <Fragment>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Arvo:400,700|Open+Sans:300,400,600,700" rel="stylesheet"/>
        </Head>
        <ThemeProvider theme={theme}>
          <MainSection title="Golog." logo>
            <TextSectionBody text="La implementacion de Go en Prolog" buttonText="Jugar"/>
          </MainSection>
        </ThemeProvider>
      </Fragment>
    )
  }

}
