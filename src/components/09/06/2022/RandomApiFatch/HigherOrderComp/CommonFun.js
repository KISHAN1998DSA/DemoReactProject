import React, { Component } from "react";
const CommonFun = (WrappedComponent,incrementValue) => {
  class CommonFun extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState({
        count: this.state.count + incrementValue,
      });
    };

    render() {
     // console.log(this.props.name);
      return (
        <div>
          <WrappedComponent
            count={this.state.count}
            incrementCount={this.incrementCount}
            {...this.props}
          />
        </div>
      );
    }
  }
  return CommonFun;
};
export default CommonFun;
