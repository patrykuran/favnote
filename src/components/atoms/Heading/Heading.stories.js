import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Heading', module)
  .add('Normal', () => <Heading>Hello Patryk</Heading>)
  .add('big', () => <Heading big>Hello Patryk</Heading>);
