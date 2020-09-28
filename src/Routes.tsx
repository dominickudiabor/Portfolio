import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './container/home/index';
import TechStack from './container/tech-stack';
import Projects from './container/projects';
import About from './container/about';
import Contact from './container/contact';
import NotFound from './container/not-found';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/tech-stack" component={TechStack} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
