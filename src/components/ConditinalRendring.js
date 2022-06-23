import React, { Component } from 'react'
import Welcome from './Welcome'

class ConditinalRendring extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogIn:true
      }
    }
  render() {
    
    // return this.state.isLogIn?<div>Welcome Kishan</div>:<div>Welmoe User</div>
    
    // let message
    // if(this.state.isLogIn){
    //     message=<div>Welcome Kishan</div>
    // }else{
    //     message=<div>Welcome User</div>
    // }
    // return message
    
      if(this.state.isLogIn)
      {
        return <div>Welcome Kishan</div>
      }else{
        return <div>Welcome User</div>
      }
  }
}

export default ConditinalRendring