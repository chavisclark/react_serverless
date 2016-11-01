import React from 'react'
import classNames from 'classnames/bind'
import styles from '../../styles/main.css'

const cx = classNames.bind(styles);

 const Contact = (props) => {
    return (
      <ul className={cx("flex-outer")}>
        <div className={cx('question')}>
        <h2>What's your contact information?</h2>
        </div>
        <li>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" placeholder="Enter your first name here"/>
        </li>
        <li>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" placeholder="Enter your last name here"/>
        </li>
        <li>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter your email here"/>
        </li>
        <li>
          <button type="submit">Submit</button>
        </li>
      </ul>
    )    
}
export default Contact;