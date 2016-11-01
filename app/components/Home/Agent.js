import React from 'react'
import classNames from 'classnames/bind'
import styles from '../../styles/main.css'

const cx = classNames.bind(styles);

 const Agent = (props) => {
    const {onLearn, onJoin} = props;
    return (
      <section id='agent' className={cx("row", "info")}>
        <div className={cx("column", "info-box", "agent-box")}>
          <div className={cx('clear')}></div>
        </div>
        <div className={cx("column")}>
          <h2>Become an agent</h2>
          <h3>Let's be partners!</h3>
          <p>
              Raw denim kale chips hashtag duis tilde,

              pork belly occaecat pickled butcher brunch iPhone keytar 
              
              lumberseual next level. 

              Gochujang semiotics velit typewriter voluptate, 
              green juice selvage deserunt man braid et.
              Hoodie YOLO deserunt fugiat banjo,
              nisi you probably haven't heard of them butcher fixie.
              Cardigan semiotics assumenda
              PBR&B.              
          </p>
          <div className={cx("row","agent")}>
            <div className={cx("column")} onClick={props.onLearn}>
              <span className={cx("serviceTitle")}>Learn more</span>
              <br />
              <span className={cx('fa-stack', 'fa-3x')}>
                <a className={cx("fa", "fa-certificate", "fa-stack-2x")}></a>
                <i className={cx("fa", "fa-book", "fa-stack-1x", "fa-inverse")}></i>
              </span>
            </div>
            <div className={cx("column")} onClick={props.onJoin}>
              <span className={cx("serviceTitle")}>Let's do business!</span>
              <br />
              <span className={cx('fa-stack', 'fa-3x')}>
                <a className={cx("fa", "fa-certificate", "fa-stack-2x")}></a>
                <i className={cx("fa", "fa-child", "fa-stack-1x", "fa-inverse")}></i>
              </span>
            </div>
          </div>
        </div>
      </section>
    )    
}
export default Agent;