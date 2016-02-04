import React from 'react'
import cn from 'classnames'
import p from './Panel.scss'

export const Panel = (props) =>
  <section className={cn({
    [p.root]: true,
    [props.class]: props.class,
  })} {...props}
  >
    {props.children}
  </section>

export const PanelHeader = (props) =>
  <header className={cn({
    [p.header]: true,
    [props.class]: props.class,
  })} {...props}
  >
    {props.children}
  </header>

  export const PanelBody = (props) =>
  <section className={cn({
    [p.body]: true,
    [props.class]: props.class,
  })} {...props}
  >
    {props.children}
  </section>
