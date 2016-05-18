import React, { PropTypes } from 'react'

import s from './Tag.scss'

export const Tag = ({attribute, close}) => {
  const _close = () => close(attribute)

  let closeComp;
  if (close) {
    closeComp = (
      <div className={s.closeContainer}>
        <button className={s.close} onClick={_close}>x</button>
      </div>
    )
  }

  return (
    <div className={s.root}>

      {closeComp}

      <div className={s.attributeContainer}>
        {attribute}
      </div>

    </div>
  )
}

Tag.propTypes = {
  attribute: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
