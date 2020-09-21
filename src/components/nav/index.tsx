import React from 'react'

interface NavProps {
  classname?: string
  reference: string
  aria?: string
  children: React.ReactNode
}
const Nav = ({ classname, reference, aria, children }: NavProps) => (
  <a className={classname} href={reference} aria-label={aria}>
    {children}
  </a>
)

export default Nav
