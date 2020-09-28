import React from 'react';

import SectionContainer from '../../components/section-container';
import { projects } from '../../portfolio';

import './styles.scss';

const Projects = () => {
  return <SectionContainer {...projects.sectionProps}></SectionContainer>;
};

export default Projects;
