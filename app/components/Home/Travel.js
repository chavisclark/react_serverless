import React from 'react'
import classNames from 'classnames/bind'
import styles from '../../styles/main.css'

const cx = classNames.bind(styles);

 const Travel = (props) => {
    const { onCruise, 
            onFlight, 
            onHotel,
             onVacation 
           } = props;

    return (
      <section id='travel' className={cx("row", "info")}>
        <div className={cx("column", "description")}>
          <h2>Where can you go?</h2>
          <h3>Travel the way you want</h3>
          <p>
            Jelly-o sesame snaps halvah croissant oat cake cookie. 
            Cheesecake bear claw topping. 
            Chupa chups apple pie carrot cake chocolate cake caramels.
          </p>
          <div className={cx("row", "services")}>
            <div className={cx("column")} onClick={onCruise}>
              <span className={cx("serviceTitle")}>Book your next cruise</span>
              <span className={cx('fa-stack', 'fa-3x')}>
                <a className={cx("fa", "fa-circle", "fa-stack-2x")}></a>
                <i className={cx("fa", "fa-ship", "fa-stack-1x", "fa-inverse")}></i>
              </span>
            </div>
            <div className={cx("column")} onClick={onFlight}>
              <span className={cx("serviceTitle")}>Reserve your flight</span>
              <span className={cx('fa-stack', 'fa-3x')}>
                <a className={cx("fa", "fa-circle", "fa-stack-2x")}></a>
                <i className={cx("fa", "fa-plane", "fa-stack-1x", "fa-inverse")}></i>
              </span>
            </div>
            <div className={cx("column")} onClick={onHotel}>
              <span className={cx("serviceTitle")}>Book a hotel stay</span>
              <span className={cx('fa-stack', 'fa-3x')}>
                <a className={cx("fa", "fa-circle", "fa-stack-2x")}></a>
                <i className={cx("fa", "fa-building", "fa-stack-1x", "fa-inverse")}></i>
              </span>
            </div>
            <div className={cx("column")} onClick={onVacation}>
              <span className={cx("serviceTitle")}>Get a vacation package</span>
              <span className={cx('fa-stack', 'fa-3x')}>
                <a className={cx("fa", "fa-circle", "fa-stack-2x")}></a>
                <i className={cx("fa", "fa-shopping-bag", "fa-stack-1x", "fa-inverse")}></i>
              </span>
            </div>
          </div>
        </div>
        <div className={cx("column", "info-box", "travel-box")}>
          <div className={cx('clear')}></div>
        </div>
      </section>
    )    
}
export default Travel;