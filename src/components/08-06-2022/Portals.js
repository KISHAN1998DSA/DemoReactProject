import React, { Component } from 'react'
import ReactDOM  from 'react-dom'
import ParentCall from './ParentCall'
class Portals extends Component {
  render() {
    return ReactDOM.createPortal(<ParentCall/>,document.getElementById('test1'))
  }
}

export default Portals