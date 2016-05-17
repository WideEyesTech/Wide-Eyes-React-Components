import cn from 'classnames'
import React, {PropTypes} from 'react';

import s from './LoadingSpinner.scss';

class LoadingSpinner extends React.Component {
  static propTypes = {
    fixed: PropTypes.bool.isRequired,
    white: PropTypes.bool.isRequired,
  };

  render() {
    const {fixed, white} = this.props;

    const loadingFixed = (
      <div className={cn({
        [s.fixed]: true,
        [s.white]: white || false,
      })}
      >
        <div className={s.container}>
          <div className={s.row}>
            <div className={s.root}>
              <div className={s.spinner}/>
            </div>
          </div>
        </div>
      </div>
    );

    const loading = (
      <div className={cn({
        [s.white]: white || false
      })}
      >
        <div className={s.root}>
          <div className={s.spinner}/>
        </div>
      </div>
    );

    return fixed ? loadingFixed : loading;
  }
}

export default LoadingSpinner;
