import React from 'react';
import { storiesOf } from '@storybook/react';
import PrimaryButton from '../components/PrimaryButton'

storiesOf('Primary Button', module)
  .add('with text', () => (
    <PrimaryButton>Hello Button</PrimaryButton>
  ))
  .add('with emoji', () => (
    <PrimaryButton disabled><span role="img" aria-label="so cool">😀 😎 👍 💯</span></PrimaryButton>
  ));
