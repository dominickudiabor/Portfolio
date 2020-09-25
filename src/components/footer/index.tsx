import React from 'react';

import NavLink from '../navLink';
import { footerNavigation, footerIcons } from '../../data/footer.data';

import './styles.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer__navigation">
        {footerNavigation.map((item, idx) => {
          const { classname, children } = item;
          return (
            <NavLink key={idx} route="" className={classname} aria="footer navigation">
              <Link to={''}>{children}</Link>
            </NavLink>
          );
        })}
      </div>

      <p className="footer__text">Copyright © {date} Dominic Travis Kudiabor</p>

      <div className="footer__icons">
        {footerIcons.map((icon, idx) => {
          const { aria, children } = icon;
          return (
            <NavLink route="" key={idx} aria={aria}>
              {children}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
