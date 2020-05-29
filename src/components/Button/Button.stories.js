import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Primary', () => <Button>Button Primary</Button>)
  .add('Secondary', () => <Button secondary>Button Secondary</Button>);
