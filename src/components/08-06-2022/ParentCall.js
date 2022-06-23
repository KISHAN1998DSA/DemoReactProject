import React, { Component } from 'react'
import ChildFun from './ChildFun'

class ParentCall extends Component {
    constructor(props) {
      super(props)
    this.parentInputRef=React.createRef()
    }

    assignRef=()=>{
        //debugger;
        //this.parentInputRef.current.childFunCall()
        this.parentInputRef.current.focus()
        alert(this.parentInputRef.current.value)
    }
  render() {
    return (
      <div>
          <button onClick={this.assignRef}>Call Child</button>
          <ChildFun name="mohan" ref={this.parentInputRef}/>
      </div>
    )
  }
}

export default ParentCall
