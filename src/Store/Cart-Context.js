import React from "react";

const CartContext = React.createContext({
  mealItems:[],
  totalMeals:0,
  addMeal:(meal)=>{},
  removeMeal:(id)=> {}
});
export default CartContext;