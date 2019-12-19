import React, {Component} from 'react';
import moment from 'moment';
import {DatetimePicker} from 'rc-datetime-picker';
import 'rc-datetime-picker/dist/picker.css';

class Date extends Component {
  constructor() {
    super();
    this.state = {
      moment: moment()
    };
  }

  handleChange = (moment) => {
    this.setState({
      moment
    });
  }

  render() {
    return (
      <DatetimePicker
        moment={this.state.moment}
        onChange={this.handleChange}
      />
    )
  }
}

export default Date;