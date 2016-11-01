import React from 'react'
import styles from '../styles/modal'

const PropTypes = React.PropTypes;

function Modal(props) {
  var {isOpen, closePopupProp, children} = props;
  if (isOpen === false) {
    return null
  } else {
      return (
        <section style={styles.popupContainer}>
            <div id='modal-box' style={styles.popup}>
                {children}
            </div>
            <div style={styles.backdrop} onClick={closePopupProp}></div>
        </section> 
      )    
  }
}
export default Modal;