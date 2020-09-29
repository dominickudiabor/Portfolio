import React from 'react';

import './styles.scss';

interface ProjectCardProps {
  imageUrl: string;
  name: string;
  stack: string;
  gitLink: string;
  viewLink: string;
}

const ProjectCard = ({ imageUrl, name, stack, gitLink, viewLink }: ProjectCardProps) => (
  <div className={`${!gitLink && 'private'} project-card`}>
    <img className="project-card__image" src={imageUrl} alt={name} />
    <div className="project-card__contents">
      <p>{name}</p>
      <p className="project-card__stack">{stack}</p>
      <div className="project-card__buttons">
        {[
          { name: 'View', link: viewLink },
          { name: 'GitHub', link: gitLink },
        ].map(
          ({ name, link }, idx) =>
            gitLink && <a className="project-card__button" key={`${name}-${idx}`} children={name} href={link} />
        )}
      </div>
      {!gitLink && <p className="project-card__private">Private Repo</p>}
    </div>
  </div>
);

export default ProjectCard;
