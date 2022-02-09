import React, { Component } from "react";
import { DropdownDate } from "react-dropdown-date";

const formatDate = (date) => {
  // formats a JS date to 'yyyy-mm-dd'
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [month, day, year].join("-");
};

class Datepicker extends Component {
  constructor(props) {
    super(props);
    this.state = { date: null, selectedDate: "03-09-1967" };
  }

  render() {
    return (
      <div>
        <DropdownDate
          startDate={
            // optional, if not provided 1900-01-01 is startDate
            "04-01-1969" // 'yyyy-mm-dd' format only
          }
          endDate={
            // optional, if not provided current date is endDate
            "04-03-1999" // 'yyyy-mm-dd' format only
          }
          selectedDate={
            // optional
            this.state.selectedDate // 'yyyy-mm-dd' format only
          }
          onDateChange={(date) => {
            // optional
            console.log(date);
            this.setState({ date: date, selectedDate: formatDate(date) });
          }}
        />
      </div>
    );
  }
}

export default Datepicker;
