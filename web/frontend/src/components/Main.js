import React from 'react';
import './Main.css';
import { Switch, Route } from 'react-router-dom'

import HomePage from '../containers/HomePage'
import MembersPage from '../containers/MembersPage'

const Main = () => {
  return (
      <Switch>
          <Route 
            exact path='/' component={HomePage}>
          </Route>
          <Route exact path='/Members' component={MembersPage}></Route>
      </Switch>
  );
}

export default Main