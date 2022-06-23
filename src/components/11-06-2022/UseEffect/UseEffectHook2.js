import React, { useEffect, useState } from "react";

const UseEffectHook2 = () => {
  const [windowSize, setWindowSize] = useState(window.screen.width);

  const actualWidth = () => {
    setWindowSize(window.innerWidth);
  };
  useEffect(() => {
    console.warn('UseEffect ');
    window.addEventListener("resize", actualWidth);
    return () => {
      window.removeEventListener("resize", actualWidth);
    };
  },[windowSize]);
  
  return (
    <div>
      <h1>👉UseEffectHook2😃👈</h1>
      <h2>The Window Actual size is</h2>
      <h1>{windowSize}</h1>
    </div>
  );
};

export default UseEffectHook2;
