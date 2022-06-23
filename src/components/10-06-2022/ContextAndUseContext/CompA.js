import React, { createContext } from "react";
import CompB from "./CompB";
const cardItem = createContext();
function CompA() {
  const arr = [
    { id: 1, name: "Jay" },
    { id: 2, name: "Mohan" },
  ];
  return (
    <div>
      <cardItem.Provider value={arr}>
        <CompB />
      </cardItem.Provider>
    </div>
  );
}

export default CompA;
export { cardItem };
