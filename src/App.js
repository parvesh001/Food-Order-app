import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import BackgroundImg from "./Components/BackgroundImage/BackgroundImg";
import Meals from "./Components/Meals/Meals";
import MealsQuantity from "./Store/Meals-quantity";
import CartItem from "./Components/Cart/CartItem";

function App() {
  const [quantity, setQuantity] = useState(0);

  const quantityAddHandler = (mealQuantity)=>{
    setQuantity((prevQuantity)=>{
      let prevQun =  +prevQuantity;
      let currQun = +mealQuantity;
       return prevQun + currQun;
    })
  }
  return (
    <MealsQuantity.Provider value={{MealQant:quantity}}>
      <Header />
      <BackgroundImg />
      <Meals onQuantityAdd={quantityAddHandler} />
    </MealsQuantity.Provider>
  );
}

export default App;
