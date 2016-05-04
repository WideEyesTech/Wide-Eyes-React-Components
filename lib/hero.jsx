import hero from 'styles/hero.scss';
import React from 'react'

export const Hero = ({title, children}) =>
  <section className={hero.root}>
    {title
      ? (
        <header className={hero.header}>
          <hgroup>
            <h3 className="no-margin">{title}</h3>
          </hgroup>
        </header>
      )
      : null
    }
    <section>
      {children}
    </section>
  </section>
