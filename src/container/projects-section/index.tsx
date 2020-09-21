import React from 'react'

import ProjectCard from '../../components/project-card'
import section from '../../data/container-section'
import SectionContainer from '../../components/section-container'
import previews from '../../data/demos.data'
import './styles.scss'

const Projects = () => {
  const allProps = section[2]

  return (
    <SectionContainer {...allProps}>
      <div className="projects__container">
        {previews.map((project) => {
          const { id, imageUrl, header, subHeader, logic } = project
          return (
            <ProjectCard
              key={id}
              imageUrl={imageUrl}
              alt={header}
              header={header}
              subHeader={subHeader}
              description={logic}
            />
          )
        })}
      </div>
    </SectionContainer>
  )
}

export default Projects
