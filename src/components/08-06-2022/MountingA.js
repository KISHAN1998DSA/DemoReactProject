import React, { Component } from "react";
import MountingB from "./MountingB";

class MountingA extends Component {
  constructor(props) {
    super(props);
    this.mountRef=React.createRef()
    this.state = {
      name: "",
    };
    console.log("MountingA constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("MountingA getDerivedStateFromProps");
    return null;
  }
  componentWillUnmount(){
    console.log("MountingA componentWillUnmount");
    this.mountRef.current.style="color:yellow"
  }
  componentDidMount() {
    console.log("MountingA componentDidMount");
    //this.mountRef.current.style="background-color:red"
  }
  
  render() {
    console.log("MountingA Render");
    return (
      <div>
        {/* <MountingB /> */}
        <h1 ref={this.mountRef}>MountingA</h1>
      </div>
    );
  }
}

export default MountingA;
