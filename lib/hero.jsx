import hero from 'styles/hero.scss';
import React from 'react'

export const Hero = ({title, style, children}) =>
  <section className={hero.root} style={style || {}}>
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
