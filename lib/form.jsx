import 'style-loader!css-loader!styles/react-input-range.css'
import 'style-loader!css-loader!react-select/dist/react-select.css'
import 'style-loader!css-loader!react-input-range/dist/react-input-range.css'

import cn from 'classnames'
import s from 'styles/forms.scss';
import InputRange from 'react-input-range'
import React from 'react'
import ReactSelect from 'react-select'

export const Form = (props) =>
  <form {...props} noValidate autoComplete>
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

export const Select = ({name, onChange, options, value, placeholder}) =>
  <ReactSelect
    name={name}
    onChange={onChange}
    options={options}
    value={value}
    placeholder={placeholder}
  />

export const InputRange = ({maxValue, minValue, step, onChange, value}) =>
  <InputRange
    maxValue={maxValue}
    minValue={minValue}
    onChange={onChange}
    step={step}
    value={value}
  />
