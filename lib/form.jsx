import cn from 'classnames'
import s from 'styles/forms.scss';
import React from 'react'

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

export class Select extends React.Component {
  render() {
    return (
      <select className={cn({[s['input-bg']]: this.props.size === 'bg'})} {...this.props}>
        {this.props.children}
      </select>
    );
  }
}
