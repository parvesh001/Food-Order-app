import React from "react";

const MaxQuantity = React.createContext({
  mealsQuantity: 0,
  increment: ()=>{},
  decrement:  ()=>{}
});
export default MaxQuantity;
