import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
