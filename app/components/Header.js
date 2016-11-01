import React from 'react'
import classNames from 'classnames/bind'
import styles from '../styles/navigation.css'

const cx = classNames.bind(styles);

const Header = (props) => {
  const { onFlight,
          onCruise,
          onHotel,
          onVacation, 
          activeDD, 
          hideDD
        } = props;

    return (
      <div className={cx('header')}>
        <h1>Treasured Travelers</h1>
        <span className={cx('sponsor')}>Powered by Paycation Travel</span>
        <div className={cx('right-navbar')}>
          <ul>
            <li className={cx("dd-trigger")} onClick={activeDD}>Book a trip</li>
            <a href='#agent'><li>Become an agent</li></a>
          </ul>
        </div>
        <nav onClick={hideDD}>
          <div>
            <span className={cx('closeBtn')}>X</span>
            <ul className={cx('submenu')}>
              <li onClick={onFlight} className="dropdown">Flights</li>
              <li onClick={onCruise} className="dropdown">Cruises</li>
              <li onClick={onHotel} className="dropdown">Hotels</li>
              <li onClick={onVacation} className="dropdown">Vacation Packages</li>
            </ul>
          </div>
        </nav>
      </div>
    )    
}

export default Header;
