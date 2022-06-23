import React, { Component } from "react";

class CommonRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementCount = (cnt) => {
      console.log(this.state.count);
    this.setState({
      count: this.state.count + cnt,
    });
  };
  render() {
    const { count } = this.state;
    return <div>{this.props.children(count, this.incrementCount)}</div>;
  }
}

export default CommonRender;
