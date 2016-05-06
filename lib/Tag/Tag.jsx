import React, { PropTypes } from 'react'

import s from './Tag.scss'

const AttributeTag = ({attribute, close}) => {
  const _close = () => close(attribute)

  return (
    <div className={s.root}>
      <div className={s.closeContainer}>
        <button className={s.close} onClick={_close}>x</button>
      </div>
      <div className={s.attributeContainer}>
        {attribute}
      </div>
    </div>
  )
}

export default AttributeTag
