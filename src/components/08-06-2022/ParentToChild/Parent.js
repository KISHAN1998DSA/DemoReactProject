import React, { Component } from "react";
import Child from "./Child";
class Parent extends Component{
    constructor(){
        super()
        this.handleRef=React.createRef()
    }
    callChild=()=>{
       
        console.log(this.handleRef.current.text="hello");
        this.handleRef.current.handleChildData()
    }

    render(){
        let arr=['mohan','sohan','rohan']
        return(
            <div>
                <Child arr={arr} ref={this.handleRef}/>
                <button onClick={this.callChild}>Click Me</button>
            </div>
        )
    }
}
export default Parent 