import React, { Component } from "react";

export class HoverFunRender extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onMouseOver={() => incrementCount(3)}>
          Hover {count} Times
        </button>
      </div>
    );
  }
}

export default HoverFunRender;
