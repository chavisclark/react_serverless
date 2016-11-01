import React from 'react'
import classNames from 'classnames/bind'
import styles from '../../styles/main.css'

const cx = classNames.bind(styles);

 const PageAnchorWrapper = (props) => {
    return (
      <div className={cx('nav-children')}>
        {props.children}
      </div>
    )    
}
export default PageAnchorWrapper;