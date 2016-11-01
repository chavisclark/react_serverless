import React from 'react'
import classNames from 'classnames/bind'
import styles from '../../styles/main.css'
import crissa from '../../images/crissa.png'

const cx = classNames.bind(styles);

 const Process = (props) => {
    return (
        <div className={cx("row", "section")}>
          <div className={cx("column")}>
            <span className={cx('pic-icon')}>
              <img src={crissa}/>
            </span>
            <div>
              <h3>Hi, I'm Crissa</h3>
              <p>
                Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple pie carrot cake chocolate cake caramels.
              </p>
            </div>
          </div>
          <div className={cx("column")}>
            <span className={cx('fa-stack', 'fa-3x')}>
              <i className={cx("fa", "fa-circle", "fa-stack-2x")}></i>
              <i className={cx("fa", "fa-compass", "fa-stack-1x", "fa-inverse")}></i>
            </span>
            <div>
              <h3>Plan the trip</h3>
              <p>
                Whether traveling by train, plane or ship, I will get you there. 
                I'll work with the best vendors to make sure getting to your destination is as enjoyable as possible.
              </p>
            </div>
          </div>
          <div className={cx("column")}>
            <span className={cx('fa-stack', 'fa-3x')}>
              <i className={cx("fa", "fa-circle", "fa-stack-2x")}></i>
              <i className={cx("fa", "fa-street-view", "fa-stack-1x", "fa-inverse")}></i>
            </span>
            <div>
              <h3>Getting you there</h3>
              <p>
                Pancetta beef ribs fatback pastrami bacon turducken
                ham boudin pork belly sausage, Pancetta beef ribs. - TRAVEL.
              </p>
            </div>
          </div>
        </div>
    )    
}
export default Process;
