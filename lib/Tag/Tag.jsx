import React, {PropTypes} from 'react'
import cn from 'classnames'
import s from './Tag.scss'

export default class Tag extends React.Component {
  static propTypes = {
    removeTag: PropTypes.func,
    disabled: PropTypes.bool,
  };

  render() {
    const {disabled, removeTag, children} = this.props;
    const closeComp = (
      <span>
        &nbsp;
        <a href="#" onClick={(ev) => removeTag(ev, children)}>
          <i className={cn('fa', 'fa-close', s.close)}></i>
        </a>
      </span>
    );

    return (
      <div className="inlineBlock">
        <span className={cn({[s.tag]: true, [s.disabled]: disabled})}>
          {children} {removeTag ? closeComp : null}
        </span>
      </div>
    )
  }
}
