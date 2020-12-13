import React, { Component } from "react"

// Imports for the DateRangePicker
import "react-dates/lib/css/_datepicker.css"
import "react-dates/initialize"
import { DateRangePicker } from "react-dates"

import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/App.css"
// Import component
import Viz from "./components/Viz"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null,
      focused: null,
    }
  }

  render() {
    return (
      <div className="container">
        <DateRangePicker
          isOutsideRange={() => false}
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) =>
            this.setState({ startDate, endDate })
          } // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />
        <Viz startDate={this.state.startDate} endDate={this.state.endDate} />
      </div>
    )
  }
}
