import React, { Component } from "react";
import CommonFun from "./CommonFun";

class ClickFun extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={() => incrementCount()}>Click {count} Time</button>
      </div>
    );
  }
}

export default CommonFun(ClickFun,4);
