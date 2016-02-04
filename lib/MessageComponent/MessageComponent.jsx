import React, {PropTypes} from 'react'
import cn from 'classnames'
import s from './MessageComponent.scss'

export default class MessageComponent extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    error: PropTypes.bool,
    message: PropTypes.string,
    onload: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const {onload, id} = this.props;
    onload(id);
  }

  render () {
    const {error, message} = this.props;
    const contentComp = (
      <section className={cn({
        [s.root]: true,
        [s.error]: error,
        [s.success]: !error,
      })}
      >
        <article>
          <header>
            <hgroup>
              <p>New message</p>
            </hgroup>
          </header>
          <p>{message}</p>
        </article>
      </section>
    );

    return contentComp;
  }
}

export default MessageComponent
