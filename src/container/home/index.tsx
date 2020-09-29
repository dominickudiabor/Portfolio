import React from 'react';
import Button from '../../components/button';
import { home } from '../../portfolio';
import { Fade } from 'react-awesome-reveal';

import './styles.scss';

const Home = () => (
  <>
    <div className="about">
      <Fade direction={'left'} duration={1000}>
        <div className="about__intro">
          {home.description.map((desc, idx) => (
            <p key={`description-${idx}`}>{desc}</p>
          ))}
        </div>
      </Fade>
      <Fade delay={1000} direction={'right'}>
        <div className="about__buttons">
          {home.socialMedia.map(({ label, invert, link }, idx) => (
            <Button key={`${label}-${idx}`} inverted={invert} children={label} link={link} />
          ))}
        </div>
      </Fade>
    </div>
  </>
);

export default Home;
