import React from 'react'

interface SectionContainerProps {
  id: string
  classname1: string
  classname2: string
  classname3: string
  header: string
  children: React.ReactNode
}
const SectionContainer = ({ id, classname1, classname2, classname3, header, children }: SectionContainerProps) => (
  <section id={id} className={classname1}>
    <h2 className={classname2}>{header}</h2>
    <hr className={classname3} />
    {children}
  </section>
)

export default SectionContainer
