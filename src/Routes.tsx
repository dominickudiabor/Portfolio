import React from 'react';
import { Route } from 'react-router-dom';

import Home from './container/home/index';
import TechStack from './container/tech-stack';
import Projects from './container/projects';
import About from './container/about';

const Routes = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route exact path="/tech-stack" component={TechStack} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/about" component={About} />
  </>
);

export default Routes;
