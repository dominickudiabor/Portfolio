import React from 'react';
import './styles.scss';

interface StackDetailsProps {
  image: string;
  title: string;
  hashTags: string[];
}

const StackDetails = ({ image, title, hashTags }: StackDetailsProps) => (
  <>
    <div className="details">
      <div className="details__img">
        <img className="details__image" src={image} alt={title} />
      </div>

      <div className="details__content">
        <p className="details__title">{title}</p>
        {hashTags.map((tag, idx) => (
          <span className="details__hash" key={tag}>{`${idx ? ' | ' : ''}${tag}`}</span>
        ))}
      </div>
    </div>
  </>
);

export default StackDetails;
