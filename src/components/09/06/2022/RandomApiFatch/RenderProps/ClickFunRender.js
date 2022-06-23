import React, { Component } from "react";

class ClickFunRender extends Component {
  render() {
    const { count, incrementCount, name } = this.props;
    return (
      <div>
        {name}
        <button onClick={() => incrementCount(5)}>Click {count} Times</button>
      </div>
    );
  }
}

export default ClickFunRender;
