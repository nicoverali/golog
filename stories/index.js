import React from 'react';
import { storiesOf } from '@storybook/react';
import testButton from './TestButton';
import testTypography from './TestTypography';

import PrimaryButton from '../components/PrimaryButton';
import FlatButton from '../components/FlatButton';
import Competitor from '../components/Competitor';


testButton('Primary Button', PrimaryButton);
testButton('Flat Button', FlatButton, {secondary: 'secondary'})

storiesOf('Competitor', module)
  .add('Usuario comun', () => (
    <Competitor icon="User"/>
  ));

testTypography();
