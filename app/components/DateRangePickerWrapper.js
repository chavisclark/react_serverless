import React from 'react';
import classNames from 'classnames/bind'
import DateRangePicker from 'react-dates/src/components/DateRangePicker';
import styles from '../styles/main.css'

const cx = classNames.bind(styles)

export default class DateRangePickerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null,
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  handleDates() {
    if (this.state.endDate) {
      var from = this.state.startDate._d;
      var to = this.state.endDate._d;
      this.props.containerDateValues(from, to)
    }
  }

  render() {
    const { focusedInput, startDate, endDate } = this.state;

    return (
      <div>
        <DateRangePicker
          {...this.props}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate}
        />
        <span className={cx('trav-btn')} onClick={this.handleDates.bind(this)}><span>Submit</span></span>
      </div>
    );
  }
}