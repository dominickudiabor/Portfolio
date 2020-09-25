import React, { useState } from 'react';
import { header } from '../../portfolio';
import NavLink from '../navLink';
import HamburgerMenu from 'react-hamburger-menu';
import './styles.scss';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClick = () => setOpenMenu(!openMenu);
  /*   const handleLinkClick = () => setOpenMenu(false); */

  return (
    <div className="header" id="header">
      <a href="/" className="header__logo">
        {header.navigation.map((NavLink) => NavLink)}
      </a>

      <div className="header__icons">
        {header.headerLinks.map((item) => {
          const { classname, link, id, route } = item;
          return (
            <NavLink key={id} className={classname} route={route} aria={link}>
              {link}
            </NavLink>
          );
        })}
      </div>
      <div className="header__menu">
        <HamburgerMenu
          isOpen={openMenu}
          menuClicked={handleMenuClick}
          width={20}
          height={17}
          strokeWidth={2}
          rotate={0}
          color="#008095"
          borderRadius={0}
          animationDuration={0.5}
        />
      </div>
    </div>
  );
};

export default Header;
