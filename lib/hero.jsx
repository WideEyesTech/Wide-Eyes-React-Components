import hero from './styles/hero.scss';
import React from 'react'

export const Hero = ({title, children}) =>
  <section className={hero.root}>
    <header className={hero.header}>
      <hgroup>
        <h3 className="no-margin">{title}</h3>
      </hgroup>
    </header>
    <section className={hero.body}>
      {children}
    </section>
  </section>
