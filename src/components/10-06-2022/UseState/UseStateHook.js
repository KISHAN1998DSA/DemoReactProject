import React, { useState } from "react";

const UseStateHook = () => {
  // const [count,setCount]=useState(()=>{
  //   console.log('Constructor');
  //   return 0
  // })
  const [state, setState] = useState({ count: 0, name: "Increment" });
  const count = state.count;
  const name = state.name;
  const increment = (num) => {
    setState((prevCount) => {
      return { ...prevCount , name: "Increment", count: prevCount.count + num };
    });
    // setCount(count=>count+num)
  };

  const decrement = (num) => {
    setState((prevCount) => {
      return { ...prevCount, name: "Decrement", count: prevCount.count - num };
    });
  };
  return (
    <div className="wrapper">
      {name}
      <button className="button" onClick={() => increment(5)}>
        incr
      </button>
      {count}
      <button onClick={() => decrement(10)}>Decrease</button>
    </div>
  );
};

export default UseStateHook;
