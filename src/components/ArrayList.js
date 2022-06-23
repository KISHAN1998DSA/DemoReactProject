import React from "react";
import DisplayArrayList from "./DisplayArrayList";

function ArrayList() {
  const names = [
    { name: "Mohan", age: 45, skill: "Painter" },
    { name: "Sohan", age: 15, skill: "Driver" },
    { name: "Rohan", age: 60, skill: "Doctor" },
    { name: "jay", age: 25, skill: "Engineer" },
  ];
  const nameList = names.map((name,index) => (
    <DisplayArrayList key={index} nameProps={name} />
  ));
  return <h1>{nameList}</h1>;
}

export default ArrayList;
