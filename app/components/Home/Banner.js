import React from 'react'
import classNames from 'classnames/bind'
import styles from '../../styles/main.css'

const cx = classNames.bind(styles);

 const Banner = (props) => {
    const {onRequest} = props;
    return (
      <div className={cx('container')}>
        <div className={cx('mobile-spacer')} />
        <div className={cx('box')}>
          <h2>Your journey continues</h2>
          <p> I care about your travel experience. Book your next journey with me and let me worry about the details...</p>
          <div className={cx('book-btn')} onClick={onRequest}>
            Send travel request <i className={cx("fa", "fa-globe", "fa-inverse")}></i>
          </div>
        </div>
      </div>
    )    
}
export default Banner;