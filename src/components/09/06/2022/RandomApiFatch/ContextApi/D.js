import React, { Component } from 'react'
import {firstName,lastName} from './A'
export class D extends Component {
  render() {
    return (
      <div>
          <firstName.Consumer>
              {(fName)=>{
                  return (
                      <lastName.Consumer>
                          {(lName)=>{
                              return(<h1>{fName} {lName}</h1>)
                          }}
                      </lastName.Consumer>
                  )
              }}
          </firstName.Consumer>
      </div>
    )
  }
}

export default D