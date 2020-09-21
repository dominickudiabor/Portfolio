import React from 'react'

import './styles.scss'

interface ProjectCardProps {
  imageUrl: string
  header: string
  subHeader: string
  description: string
  alt: string
}

const ProjectCard = ({ imageUrl, header, subHeader, description, alt }: ProjectCardProps) => (
  <div className="project-card">
    <img className="project-card__image" src={imageUrl} alt={alt} />
    <div className="project-card__contents">
      <p className="project-card__header">{header}</p>
      <p className="project-card__sub-header">{subHeader}</p>
      <p className="project-card__description">{description}</p>
    </div>
  </div>
)

export default ProjectCard
