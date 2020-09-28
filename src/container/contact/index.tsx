import React from 'react';
import SectionContainer from '../../components/section-container';
import { contact } from '../../portfolio';

import './styles.scss';

const Contact = () => (
  <SectionContainer {...contact.sectionProps}>
    <div className="contact__container">
      <div className="contact__labels">
        {Object.keys(contact.links).map((name, idx) => (
          <p className="contact__level" key={`linkname-${idx}`}>
            {name}
          </p>
        ))}
      </div>
      <div className="contact__links">
        {Object.values(contact.links).map((link, idx) => (
          <p className="contact__level" key={`linknumber-${idx}`}>
            <a href={link}>{link}</a>
          </p>
        ))}
      </div>
    </div>
  </SectionContainer>
);

export default Contact;
