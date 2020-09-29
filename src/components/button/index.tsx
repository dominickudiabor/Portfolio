import React from 'react';

import './styles.scss';

interface ButtonProps {
  inverted?: boolean;
  children?: string;
  link?: string;
}

const Button = ({ inverted, children, link }: ButtonProps) => (
  <a className={`${inverted && 'inverted'} button`} href={link}>
    {children}
  </a>
);
export default Button;
