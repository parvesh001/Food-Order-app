import React from "react";

const CartContext = React.createContext({
  mealItems:[],
  totalAmount:0,
  totalMeals:0,
  addMeal:(meal)=>{},
  removeMeal:(id)=> {},
  clearCart:()=>{}
});
export default CartContext;