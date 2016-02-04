import cn from 'classnames'
import grid from './styles/grid.scss'
import React from 'react'

export const Container = (props) =>
  <section className={cn({
    [grid.container]: true,
    [grid.flex]: true,
    [grid['h-center']]: props.center
  })} {...props}
  >
    {props.children}
  </section>

export const Row = (props) =>
  <section className={cn({
    [grid.row]: true,
    [grid['h-center']]: props.center
  })} {...props}
  >
    {props.children}
  </section>

export const Grid = (props) =>
  <section className={cn({
    [grid.grid]: true,
    [grid.flex]: true,
    [grid['h-center']]: props.center,
    [grid['full-height']]: props.center
  })}
  >
    {props.children}
  </section>
