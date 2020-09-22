import React from 'react'

import NavLink from '../navLink'
import { footerNavigation, footerIcons } from '../../data/footer.data'

import './styles.scss'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <div className="footer">
      <div className="footer__navigation">
        {footerNavigation.map((item, idx) => {
          const { classname, reference, children } = item
          return (
            <NavLink key={idx} className={classname} reference={reference} aria="footer navigation">
              {children}
            </NavLink>
          )
        })}
      </div>

      <p className="footer__text">Copyright © {date} Dominic Travis Kudiabor</p>

      <div className="footer__icons">
        {footerIcons.map((icon, idx) => {
          const { reference, aria, children } = icon
          return (
            <NavLink key={idx} reference={reference} aria={aria}>
              {children}
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default Footer
