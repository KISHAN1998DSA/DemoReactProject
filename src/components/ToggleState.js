import React, {Component}from 'react'

class ToggleState extends Component {
    constructor() {
      super()
      this.state = {
         show:false
      }
    }
    handleButtons=(event)=>{
        if(event=='show'){
            this.setState({show:true})
        }else if(event=='hide'){
            this.setState({show:false})
        }
    }
    render(){
        return (

            <div>
                {this.state.show ? <h1>This Message is For Hide And Show</h1>:<></>}
                <button onClick={()=>this.handleButtons('show')}>Show</button>
                <button onClick={()=>this.handleButtons('hide')}>Hide</button>
                {/* <button onClick={()=>this.handleButtons()}>Toggle</button> */}
            </div>
          )
        }
  
}

export default ToggleState