import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Notes from 'views/Notes';
import Articles from 'views/Articles';
import Twitters from 'views/Twitters';

const Root = () => (
  <div>
    <MainTemplate>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Notes} />
          <Route path="/articles" component={Articles} />
          <Route path="/twitters" component={Twitters} />
        </Switch>
      </BrowserRouter>
    </MainTemplate>
  </div>
);

export default Root;
