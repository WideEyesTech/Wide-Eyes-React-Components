import React from 'react'
import s from './table.scss'

export const Table = ({children}) =>
  <table className={s.root}>
    {children}
  </table>
