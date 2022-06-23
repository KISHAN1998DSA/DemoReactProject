import React, { Component } from "react";

export class EventClick extends Component {
  checkedClick() {
    console.log("Clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.checkedClick}>Click Me</button>
      </div>
    );
  }
}

export default EventClick;
