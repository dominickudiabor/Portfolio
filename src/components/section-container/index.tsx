import React from 'react';

interface SectionContainerProps {
  id: string;
  classname1: string;
  classname2: string;
  classname3: string;
  header: string;
  children: React.ReactNode;
}
const SectionContainer = ({ id, classname1, classname2, classname3, header, children }: SectionContainerProps) => (
  <div id={id} className={classname1}>
    <p className={classname2}>{header}</p>
    <hr className={classname3} />
    {children}
  </div>
);

export default SectionContainer;
