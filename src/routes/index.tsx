import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '@/pages/home';
import About from '@/pages/about';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
