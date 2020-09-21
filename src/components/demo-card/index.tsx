import React from 'react'

import './styles.scss'

interface DemoCardProps {
  image: string
  header: string
  description: string
  previewUrl: string
}
const DemoCard = ({ image, header, description, previewUrl }: DemoCardProps) => (
  <div className="card">
    <img className="card__image" src={image} alt="project hosted on github"></img>
    <div className="card__contents">
      <p className="card__title">{header}</p>
      <p className="card__description">{description}</p>
      <a className="class__link" href={previewUrl}>
        Click to view
      </a>
    </div>
  </div>
)

export default DemoCard
