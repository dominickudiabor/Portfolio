import React from 'react';
import SectionContainer from '../../components/section-container';
import './styles.scss';
import { techStack } from '../../portfolio';
import StackDetails from '../../components/stack-details';

const TechStack = () => (
  <SectionContainer {...techStack.sectionProps}>
    <div className="tech-stack__img-container">
      {techStack.stack.map(({ image, title, hashtags }) => (
        <StackDetails key={title} image={image} title={title} hashTags={hashtags} />
      ))}
    </div>
  </SectionContainer>
);

export default TechStack;
