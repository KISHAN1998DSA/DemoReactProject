import React, { Component } from 'react'
import ChildComponenet from './ChildComponenet'

export class ParentCmoponenet extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       parentName:'Parents'
    }
    this.greetParents=this.greetParents.bind(this)
  }
  greetParents( child){
      alert(`Hello${this.state.parentName} from ${child}`)
  }

  render() {
    return (
      <div><ChildComponenet greatHandler={this.greetParents}></ChildComponenet> </div>
    )
  }
}

export default ParentCmoponenet