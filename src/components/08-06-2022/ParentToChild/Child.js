import React, { Component } from "react";
class Child extends Component{
    handleChildData=()=>{
        alert('This is Child Props')
    }
    render(){
        return(
            <div>
                {this.props.arr.map((a,index)=><h1 key={index}>{a}</h1>)}  
            </div>
        )
    }
}
export default Child