import React from 'react'

import { ReactComponent as FeatureImage } from '../../assets/code_review.svg'
import './styles.scss'

const About = () => (
  <div className="about">
    <div className="about__description">
      <div className="about__content">
        <h1 className="about__header"> Hello, I&apos;m Dominic</h1>
        <p className="about__text">
          {' '}
          A versatile and adept individual with a keen interest in developing and designing modern web applications
          using ReactJs. My passion and enthusiasm stems from a tenacious desire to enrich the user experience and
          enhance functionality of web applications.
        </p>
      </div>

      <FeatureImage className="about__image" />
    </div>
    <svg className="arrows">
      <path className="a1" d="M0 0 L15 16 L30 0"></path>
      <path className="a2" d="M0 10 L15 26 L30 10"></path>
      <path className="a3" d="M0 20 L15 36 L30 20"></path>
    </svg>
  </div>
)

export default About
