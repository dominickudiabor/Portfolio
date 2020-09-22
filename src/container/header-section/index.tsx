import React from 'react'
import { header } from '../../portfolio'
import NavLink from '../../components/navLink'

import './styles.scss'

const Header = () => (
  <div className="header" id="header">
    <a href="/" className="header__logo">
      {header.navigation.map((NavLink) => NavLink)}
    </a>

    <div className="header__icons">
      {header.headerLinks.map((item) => {
        const { classname, reference, link, id } = item
        return (
          <NavLink key={id} className={classname} reference={reference} aria={link}>
            {link}
          </NavLink>
        )
      })}
    </div>
  </div>
)

export default Header
