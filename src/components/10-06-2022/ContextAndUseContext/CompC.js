import React, { useContext } from "react";
import { cardItem } from "./CompA";
const CompC = () => {
  const cardItemName = useContext(cardItem);
  console.log(cardItemName);
  return (
    <div>
      Card Items List
      {cardItemName.map((card, index) => (
        <div key={index}>
          {card.id} {card.name}
        </div>
      ))}
    </div>
  ); 
};

export default CompC;
