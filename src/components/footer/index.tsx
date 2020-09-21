import React from 'react'

import Nav from '../nav'
import { footerNavigation, footerIcons } from '../../data/footer.data'

import './styles.scss'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <div className="footer">
      <div className="footer__navigation">
        {footerNavigation.map((nav, idx) => {
          const { classname, reference, children } = nav
          return (
            <Nav key={idx} classname={classname} reference={reference} aria="footer navigation">
              {children}
            </Nav>
          )
        })}
      </div>

      <p className="footer__text">Copyright © {date} Dominic Travis Kudiabor</p>

      <div className="footer__icons">
        {footerIcons.map((icon, idx) => {
          const { reference, aria, children } = icon
          return (
            <Nav key={idx} reference={reference} aria={aria}>
              {children}
            </Nav>
          )
        })}
      </div>
    </div>
  )
}

export default Footer
