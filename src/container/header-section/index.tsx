import React from 'react'

import headerLinks from '../../data/header.data'
import Nav from '../../components/nav'

import './styles.scss'

const Header = () => (
  <div className="header" id="header">
    <a href="/" className="header__logo">
      <span className="header__sym"> &lt;</span>
      <span className="header__name">Dominic</span>
      <span className="header__sym">/&gt;</span>
    </a>

    <div className="header__dropdown"></div>

    <div className="header__icons">
      {headerLinks.map((link, idx) => {
        const { classname, reference, children } = link
        return (
          <Nav key={idx} classname={classname} reference={reference} aria={'header icons'}>
            {children}
          </Nav>
        )
      })}
    </div>
  </div>
)

export default Header
