import React, { Component } from 'react'

class MountingB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:''
      }
      console.log("MountingB constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("MountingB getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("MountingB componentDidMount")
    }
  render() {
    console.log("MountingB Render")
    return (
      <div>MountingB</div>
    )
  }
}

export default MountingB