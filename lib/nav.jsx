import nav from './styles/nav.scss';
import React from 'react'

export const Nav = ({inline, children}) =>
  <nav className={nav.root}>
    <ul className={inline ? nav.inline : null}>
      {children}
    </ul>
  </nav>
