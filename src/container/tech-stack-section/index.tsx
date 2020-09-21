import React from 'react'

import logos from '../../data/tech-stack.data'
import section from '../../data/container-section'
import SectionContainer from '../../components/section-container'
import './styles.scss'

const TechStack = () => {
  const allProps = section[1]

  return (
    <SectionContainer {...allProps}>
      <div className="tech-stack__img-container">
        {logos.map((logo) => {
          const { id, imageUrl, alt } = logo
          return <img key={id} className="tech-stack__images" src={imageUrl} alt={alt} />
        })}
      </div>
    </SectionContainer>
  )
}

export default TechStack
