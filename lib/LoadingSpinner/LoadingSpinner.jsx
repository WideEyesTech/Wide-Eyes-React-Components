import React from 'react';
import s from './LoadingSpinner.scss';

class LoadingSpinner extends React.Component {
  render() {
    const {fixed} = this.props;

    const loadingFixed = (
      <div className={s.fixed}>
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
      <div className={s.root}>
        <div className={s.spinner}/>
      </div>
    );

    return fixed ? loadingFixed : loading;
  }
}

export default LoadingSpinner;
