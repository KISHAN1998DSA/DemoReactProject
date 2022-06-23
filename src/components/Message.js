import React, { Component } from "react";

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:"Welcome Visitor"
        }
    }
    changeMessage(num){
        this.setState({
            message:"Thanks For Visiting"+num
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage('Website')}>Change</button>
            </div>
        )
    }
}

export default Message
