import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from './Welcome';
import App from './App';
import NotFound from './NotFound';

function Router() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route path="/store" component={App}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
  )
}

export default Router;