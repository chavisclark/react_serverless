import React from 'react'
import classNames from 'classnames/bind'
import styles from '../../styles/main.css'

const cx = classNames.bind(styles);

 const ReservationPlans = (props) => {
    const {children} = props;
    return (
      <div className={cx("date-container")}>
        <div className={cx('question')}>
          <h2>Choose your dates.</h2>
        </div>
          {children}
      </div>
    )    
}
export default ReservationPlans;