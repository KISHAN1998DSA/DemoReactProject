import React, { Component } from "react";

// class ChildFun extends Component {
//   constructor(props) {
//     super(props);
//     this.inputRef = React.createRef();
//   }

//   childFunCall = () => {
//     console.log(this.inputRef.current.value);
//     this.inputRef.current.value = "";
//     this.inputRef.current.focus();
//     this.inputRef.current.style = "padding:10px";
//     // this.inputRef.current.type="password"
//   };
//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.inputRef} />
//       </div>
//     );
//   }
// }
const ChildFun =React.forwardRef((props,ref)=>{
return(
  <div>
    <input type='text' ref={ref}/>
    <h1>{props.name}</h1>
  </div>
)
})

export default ChildFun;
