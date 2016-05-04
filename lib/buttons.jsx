import cn from 'classnames'
import s from 'styles/buttons.scss';
import React, {PropTypes} from 'react'

export const Button = (props) =>
  <button style={props.width ? {width: props.width} : null} className={cn({
    [s.btn]: true,
    inline: props.inline,
    [s['btn-outline']]: props.outline,
    [s['btn-bg']]: props.size === 'bg',
    [s['btn-sm']]: props.size === 'sm',
    [s['btn-link']]: props.mode === 'link',
    [s['btn-default']]: props.mode === 'default',
    [s['btn-primary']]: props.mode === 'primary',
    [s['btn-danger']]: props.mode === 'danger',
    [s['btn-warning']]: props.mode === 'warning',
    [s['btn-success']]: props.mode === 'success'
  })} {...props}
  >
    {props.children}
  </button>

Button.propTypes = {
  inline: PropTypes.bool,
  mode: PropTypes.string,
  outline: PropTypes.bool,
  size: PropTypes.string,
  width: PropTypes.string,
}
