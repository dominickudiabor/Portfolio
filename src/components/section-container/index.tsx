import React from 'react';
import './styles.scss';

interface SectionContainerProps {
  id: string;
  header: string;
  children?: React.ReactNode;
}
const SectionContainer = ({ id, header, children }: SectionContainerProps) => (
  <div id={id} className="section">
    <p className="section__header">{header}</p>
    <hr className="section__line" />
    {children}
  </div>
);

export default SectionContainer;
