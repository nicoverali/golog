import React from 'react';
import { storiesOf } from '@storybook/react';
import buttonTest from './buttonTest';

import PrimaryButton from '../components/PrimaryButton';
import FlatButton from '../components/FlatButton';
import Competitor from '../components/Competitor';


buttonTest('Primary Button', PrimaryButton);
buttonTest('Flat Button', FlatButton)
  .add('Secondary', () => (
    <FlatButton width="200px" secondary>Secondary</FlatButton>
  ));

storiesOf('Competitor', module)
  .add('Usuario comun', () => (
    <Competitor icon="User"/>
  ))
