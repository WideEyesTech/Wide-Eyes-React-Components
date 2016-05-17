import React, { PropTypes } from 'react'

import s from './Table.scss'

export const Table = ({striped, bordered, children}) => {
  return (
    <table className={cn({
      [s.root]: true,
      [s.striped]: striped,
      [s.bordered]: bordered
    })}
    >
      {children}
    </table>
  )
}

Table.propTypes = {
  striped: PropTypes.string.isRequired,
  bordered: PropTypes.func.isRequired,
};
