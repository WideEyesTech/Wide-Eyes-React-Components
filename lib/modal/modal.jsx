import {Container, Row} from '../grid.jsx';
import cn from 'classnames';
import React from 'react'
import s from './modal.scss'

export const Modal = ({children, show}) =>
  <section className={cn({[s.background]: true, 'hidden-xs': !show})}>
    <Container center>
      <Row center>
        {children}
      </Row>
    </Container>
  </section>
