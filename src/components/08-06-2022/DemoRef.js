import React, { Component } from 'react'

class DemoRef extends Component {
    constructor(props) {
      super(props)
        this.checkRef=React.createRef()
    }
    componentDidMount(){
        console.log(this.checkRef.current);
        this.checkRef.current.focus()
        this.checkRef.current.style='color:red'
    }
  render() {
    return (
      <div>
          <input type='text' ref={this.checkRef}/>
          
      </div>
    )
  }
}

export default DemoRef