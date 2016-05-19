import 'style-loader!css-loader!react-input-range/dist/react-input-range.css'
import 'style-loader!css-loader!react-select/dist/react-select.css'
import 'style-loader!css-loader!styles/react-input-range.css'

import cn from 'classnames'
import s from 'styles/forms.scss';
import React from 'react'

// export InputRange from 'react-input-range'
// export Select from 'react-select'

export const Form = (props) =>
  <form {...props} className={s.form} noValidate autoComplete>
    {props.children}
  </form>

export const FormGroup = (props) =>
  <section className={cn({[s.formGroup]: true, [props.className]: props.className})}>
    {props.children}
  </section>

export const FieldSet = ({children}) =>
  <fieldset className={s.fieldset}>
    {children}
  </fieldset>

export class Input extends React.Component {
  render() {
    return (
      <input className={cn({[s['input-bg']]: this.props.size === 'bg'})} {...this.props} />
    );
  }
}
