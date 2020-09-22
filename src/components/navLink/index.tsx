import React from 'react'

interface NavProps {
  className?: string;
  reference: string;
  aria?: string;
  children: React.ReactNode;
}
const NavLink = ({ className, reference, aria, children }: NavProps) => (
  <a className={className} href={reference} aria-label={aria}>
    {children}
  </a>
)

export default NavLink
