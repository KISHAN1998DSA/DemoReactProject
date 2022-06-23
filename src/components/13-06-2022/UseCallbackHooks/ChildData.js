import React, { useEffect, useState } from "react";
import UseCallbackHooksExamp from "./UseCallbackHooksExamp";

const ChildData = ({ getData }) => {
  const [item, setItem] = useState(0);
  useEffect(() => {
    setItem(getData);
  },[getData]);
  return (
    <div>
        {item}
      {/* {item.map((i) => {
        <div key={i}>{i}</div>;
      })} */}
    </div>
  );
};

export default ChildData;
