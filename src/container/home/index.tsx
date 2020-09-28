import React from 'react';
import Button from '../../components/button';
import { home } from '../../portfolio';
import { Zoom } from 'react-awesome-reveal';

import './styles.scss';

const Home = () => (
  <>
    <div className="about">
      <Zoom direction={'left'} duration={1000}>
        <div className="about__intro">
          {home.description.map((desc, idx) => (
            <p key={`description-${idx}`}>{desc}</p>
          ))}
        </div>
      </Zoom>
      <Zoom delay={1000} direction={'right'}>
        <div className="about__buttons">
          {home.socialMedia.map(({ label, invert, link }, idx) => (
            <Button key={`${label}-${idx}`} inverted={invert} children={label} link={link} />
          ))}
        </div>
      </Zoom>
    </div>
  </>
);

export default Home;
