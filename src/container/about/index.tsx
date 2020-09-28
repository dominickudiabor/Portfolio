import React from 'react';

import SectionContainer from '../../components/section-container';
import { about } from '../../portfolio';

import './styles.scss';

const About = () => {
  return (
    <SectionContainer {...about.sectionProps}>
      <div className="about__container">
        <img className="about__image" src={about.avatar} alt={about.avatar}></img>
        <div className="about__description">
          <p>{about.description}</p>
        </div>
      </div>
    </SectionContainer>
  );
};
export default About;
