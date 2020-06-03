import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Sidebar from './Sidebar';

storiesOf('Organisms/Sidebar', module)
  .addDecorator(StoryRouter())
  .add('Note', () => <Sidebar cardType="note" />)
  .add('Twitter', () => <Sidebar cardType="twitter" />)
  .add('Article', () => <Sidebar cardType="article" />);
