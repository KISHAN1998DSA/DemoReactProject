import React, { useReducer } from "react";
const initialState = { count: 0,name:'mohan' };
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
const UseReducer = () => {
  const [state, despatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.count} {state.name}</h1>
      <button
        className="button"
        onClick={() => {
          despatch({ type: "increment" });
        }}
      >
        increment
      </button>
      <br />
      <button
        className="button"
        onClick={() => {
          despatch({ type: "decrement" });
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default UseReducer;
