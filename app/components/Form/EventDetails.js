import React from 'react'
import classNames from 'classnames/bind'
import styles from '../../styles/main.css'

const cx = classNames.bind(styles);

 const EventDetails = (props) => {
    const {name} = props;
    return (
      <ul className={cx("flex-outer")}>
        <div className={cx('question')}>

        <h2>Great {name}! Now just tell me about your travel event</h2>
        </div>
        <li>
          <label htmlFor="EventName">Name your event</label>
          <input type="text" name="eventName" placeholder="for example... Rodeo in Raliegh, Dev's 40th Bday"/>
        </li>
        <li>
          <label htmlFor="EventLocation">Where do you want to go?</label>
          <input type="text" name="eventLocation" placeholder="Enter travel destination(s) here"/>
        </li>
        <li>
          <label htmlFor="description">Describe your desired travel experience</label>
          <textarea rows="6" name="description" placeholder="Enter a description of the type of travel here"></textarea>
        </li>
        <li>
          <label htmlFor="email">How many total travelers?</label>
          <input type="number" name="groupSize" placeholder="1+" />
        </li>
        <li>
          <label htmlFor="budget">What's your budget?</label>
          <input type="number" name="budget" placeholder="100" />
        </li>
        <li>
          <button type="submit">Submit</button>
        </li>
      </ul>
    )    
}
export default EventDetails;