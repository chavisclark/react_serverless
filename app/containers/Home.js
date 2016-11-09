import React from 'react'
import classNames from 'classnames/bind'
import $ from 'jquery'
import dynamics from 'dynamics.js'
import crossfade from '../utils/crossfade'
import Modal from '../components/Modal'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Home/Banner'
import Agent from '../components/Home/Agent'
import Process from '../components/Home/Process'
import PageAnchorWrapper from '../components/Home/PageAnchorWrapper'
import Travel from '../components/Home/Travel'
import Contact from '../components/Form/Contact'
import EventDetails from '../components/Form/EventDetails'
import ReservationPlans from '../components/Form/ReservationPlans'
import DateRangePickerWrapper from '../components/DateRangePickerWrapper'
import {loadState, saveState} from '../utils/localStorage'
import merge from 'lodash/merge'
import omitBy from 'lodash/omitBy'
import isEmpty from 'lodash/isEmpty'
import uuid from 'uuid'
import 'react-dates/css/styles.scss'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false,
      isDropdown: false,
      localUser: !loadState() ? {} : loadState(),
      startReservation: false
    }
  }

  backgroundSequence() {
    $(function() {
      $('body').crossfade({
        images    : [
                      'https://hd.unsplash.com/photo-1454600366270-5c75e4386c7e', 
                      'https://hd.unsplash.com/photo-1469286714608-0defd688c4e3',
                      'https://hd.unsplash.com/photo-1449562803384-2952e4ec7e49',
                      'https://hd.unsplash.com/photo-1443181844940-9042ec79924b',
                      'https://hd.unsplash.com/photo-1435587156860-5078e2af8565'
                    ],
        interval  : 4000,
        speed   : 2000,
      });
    });
  }

  handleBooking() {
    window.open("http://cmcdole.paycationonline.com/");
  }

  handleFlight() {
    console.log('that tickles')
    window.open("http://cmcdole.paycationonline.com/flights.asp");
  }

  handleCruise() {
    window.open("http://cmcdole.paycationonline.com/cruises.asp");
  }

  handleHotel() {
    window.open("http://cmcdole.paycationonline.com/hotels.asp");
  }

  handleVacation() {
    window.open("http://cmcdole.paycationonline.com/vpk.asp");
  }
  handleAgent() {
    window.open("https://secure.paycation.com/signup_country.asp?BC_ID=2291B49AE36F6B24&TS=87951F8BFD14E4A49EE3F7484A1B8CC1B7CB439A49F1E7E8&CO_LA=");
  }

  handleLearn() {
    window.open("https://vimeo.com/166146895")
  }

  handleRequest() {
      this.setState({
          isPopupOpen: true
      });
  }

  handleClosePopup() {
      this.setState({
        isPopupOpen: false
      });
      var appBody = document.querySelector("html");
      appBody.removeAttribute("style")
  }

  animateDD() {
    var nav = document.querySelector('nav')
    var items = document.querySelectorAll('li.dropdown')
    // Animate the popover
    dynamics.animate(nav, {
      opacity: 1,
      scale: 1
    }, {
      type: dynamics.spring,
      frequency: 200,
      friction: 270,
      duration: 800
    })

    // Animate each line individually
    for(var i=0; i<items.length; i++) {
      var item = items[i]
      // Define initial properties
      dynamics.css(item, {
        opacity: 0,
        translateY: 20
      })

      // Animate to final properties
      dynamics.animate(item, {
        opacity: 1,
        translateY: 0
      }, {
        type: dynamics.spring,
        frequency: 300,
        friction: 435,
        duration: 1000,
        delay: 100 + i * 40
      })
    }
    this.setState({
      isDropdown: true
    })
  }

  hideDD() {
    var nav = document.querySelector('nav')
    // Animate the popover
    dynamics.animate(nav, {
      opacity: 0,
      scale: .1
    }, {
      type: dynamics.easeInOut,
      duration: 300,
      friction: 100
    })
  }

  animateModal() {
    // Animate the popover
      var modal = document.querySelector('span')
      while (modal !== null) {
        var div = document.getElementById('modal-box')
        while (div !== null) {
          dynamics.animate(div, {
            translateY: -100
          }, {
            type: dynamics.spring,
            friction: 400,
            duration: 1300
          })
        break;
        } 
      break;
      }  
  }

  handleReservationPlans(start, end) {
    const eventId = uuid.v4();
    let stateObj = omitBy(this.state, isEmpty);
    if (start && end) {
      let event = { id: eventId, start: start, end: end };

      var newState = merge(stateObj, { localUser: { events: stateObj.localUser.events.concat([event]) } });

      this.setState({
        startReservation: true
      })

      saveState(newState.localUser)      
    }
  }

  handleComplete() {
    this.setState({
      isPopupOpen: false,
      startReservation: false
    })
  }

  handleFormSwitch() {
    if (!loadState()) {
        return (
          <Contact />
        )
    } else if (this.state.startReservation){
        return (
          <EventDetails name={this.state.localUser.firstName} />
        )
    } else {
        return (
          <ReservationPlans>
            <DateRangePickerWrapper containerDateValues={(start, end) => this.handleReservationPlans(start, end)} />
          </ReservationPlans>
        )
    }
  }

  handleOnSubmit(e) {
    e.preventDefault();

    var that = this; 
    var form = document.querySelector("form#req");
    var stateObj = {};
    for (var i in form.elements) {
      let name = form.elements[i].name;
      let value = form.elements[i].value;
      stateObj[name] = value
    }

    var result = omitBy(stateObj, isEmpty);

    if (loadState() && this.state.startReservation) {
        var mostRecent = this.state.localUser.events.length - 1
        merge(this.state.localUser.events[mostRecent], result);
        
        saveState(this.state.localUser)
        this.handleComplete();     
    } else {
        merge(this.state, {localUser: result})
        saveState(this.state.localUser)

        this.handleClosePopup();
        setTimeout(function(){
          that.setState({
            isPopupOpen: true
          })
        }, 500)
    }
  }

  componentWillMount() {
     if (this.state.isDropdown === true) {
      this.hideDD()
    }   
  }

  componentDidMount() {
    this.backgroundSequence();
    $(function() {
      $('a[href ^= "#"]').click(function() {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({
          scrollTop: position
        }, speed, "swing");
        return false;
      });
    });
  }
  
  componentDidUpdate() {
    if (this.state.isPopupOpen === true) {
      this.animateModal()
      var appBody = document.querySelector("html");
      appBody.style.overflow='hidden';
    }
  }

  render() {
    return (
      <div>
        <Header onBooking={this.handleBooking}
            activeDD={this.animateDD.bind(this)}
            hideDD={this.hideDD} 
            onVacation={this.handleVacation}
            onCruise={this.handleCruise}
            onFlight={this.handleFlight}
            onHotel={this.handleHotel} />
        <main onClick={this.hideDD}>
          <Banner onRequest={this.handleRequest.bind(this)} />
          <Process />
          <PageAnchorWrapper>
            <Travel onVacation={this.handleVacation}
              onCruise={this.handleCruise}
              onFlight={this.handleFlight}
              onHotel={this.handleHotel} />
            <Agent onLearn={this.handleLearn} 
              onJoin={this.handleAgent} />
          </PageAnchorWrapper>
        </main>
        <Footer />
        <Modal isOpen={this.state.isPopupOpen} 
          closePopupProp={this.handleClosePopup.bind(this)}>
          <form id="req" onSubmit={this.handleOnSubmit.bind(this)}>
            {this.handleFormSwitch()}
          </form>
        </Modal>
      </div>
    )
  }
}
