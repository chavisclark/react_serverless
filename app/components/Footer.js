import React from 'react'
import classNames from 'classnames/bind'
import styles from '../styles/main.css'

const cx = classNames.bind(styles);

 const Footer = () => {
    return (
      <div className={cx("row", "footer")}>
        <div className={cx("column")}>
          <div className={cx("row")}>
            <div className={cx("column")}>
              <div>Crissa McDole</div>
              <div>Xstream Certified Travel Consultant (CTC)</div>
            </div>
            <div className={cx("column")}>
            <div>Contact</div>
            <div>treasuredtravelers [at] gmail.com</div>
            </div>
          </div>
        </div>
        <div className={cx("column")}>
          <h1>Treasured Travelers</h1>
          <p>Booking memories that will last a lifetime</p>
        </div>
      </div>
    )    
}
export default Footer;