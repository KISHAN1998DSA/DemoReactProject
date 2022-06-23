import React, { Component } from "react";
import CommonFun from "./CommonFun";
class HoverFun extends Component {
  render() {
    const { count, incrementCount, name } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <button onMouseOver={() => incrementCount()}>Hover {count} Time</button>
      </div>
    );
  }
}

export default CommonFun(HoverFun,3);
