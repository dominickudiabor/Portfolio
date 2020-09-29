import React from 'react';
import ProjectCard from '../../components/project-card';

import SectionContainer from '../../components/section-container';
import { projects } from '../../portfolio';

import './styles.scss';

const Projects = () => {
  return (
    <SectionContainer {...projects.sectionProps}>
      <div className="projects__container">
        {projects.cards.map(({ ...props }, idx) => (
          <ProjectCard key={`project-${idx}`} {...props} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;
