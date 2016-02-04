import {Container, Row, Button} from '../';
import React, {PropTypes} from 'react'
import s from './ConfirmationBox.scss'

export default class ConfirmationBox extends React.Component {
  static propTypes = {
    confirm: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired,
  };

  render() {
    const {confirm, cancel} = this.props;
    const contentComp = (
      <section className={s.root}>
        <Container center>
          <Row center>
            <section className={s.panel  + ' col-xs-1-1 col-sm-2-3 col-lg-1-3'}>
              <article>
                <header className="text-center">
                  <hgroup>
                    <h3 className="no-margin">Are you sure?</h3>
                  </hgroup>
                </header>
                <section className="text-center">
                  <Button mode="link" onClick={confirm}>
                    <i className="fa fa-check" autoFocus></i>
                    &nbsp; Confirm
                  </Button>
                  <Button mode="link" onClick={cancel}>
                    <i className="fa fa-times"></i>
                    &nbsp; Cancel
                  </Button>
                </section>
              </article>
            </section>
          </Row>
        </Container>
      </section>
    );

    return contentComp;
  }
}
