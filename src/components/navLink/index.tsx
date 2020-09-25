import React from 'react';
import { Link } from 'react-router-dom';
interface NavProps {
  className?: string;
  route: string;
  aria?: string;
  children: React.ReactNode;
}
const NavLink = ({ className, aria, children, route }: NavProps) => {
  return (
    <Link to={route} className={className} href={route} aria-label={aria}>
      {children}
    </Link>
  );
};

export default NavLink;
