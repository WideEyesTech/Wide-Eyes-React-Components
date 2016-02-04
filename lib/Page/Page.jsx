import React from 'react'
import p from './Page.scss'

export const PageHeader = ({children}) =>
  <header className={p.header}>
    {children}
  </header>

export const PageSubHeader = ({children}) => 
  <section className={p.subheader}>
    {children}
  </section>

export const PageBody = ({children}) =>
  <section className={p.body}>
    {children}
  </section>
