import React from 'react';
import { Route } from 'react-router-dom';

import Home from './container/home/index';
import Demos from './container/demo-section';
import TechStack from './container/tech-stack';
import Projects from './container/projects-section';
import ContactForm from './container/form-section';

const Routes = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route exact path="/demos" component={Demos} />
    <Route exact path="/tech-stack" component={TechStack} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/contact" component={ContactForm} />
  </>
);

export default Routes;
