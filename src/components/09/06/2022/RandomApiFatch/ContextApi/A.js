import React, { Component } from "react";
import B from "./B";
const firstName = React.createContext();
const lastName=React.createContext();
export class A extends Component {
  render() {
    return (
      <div>
        <firstName.Provider value='Jay'>
            <lastName.Provider value='Mohan'>
          <B />
          </lastName.Provider>
        </firstName.Provider>
      </div>
    );
  }
}
export default A;
export {firstName,lastName}
