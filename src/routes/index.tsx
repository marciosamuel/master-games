import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/favorites-list" component={Favorites} />
    </Switch>
  );
};

export default Routes;
