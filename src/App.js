import React, { useReducer, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import BackgroundImg from "./Components/BackgroundImage/BackgroundImg";
import Meals from "./Components/Meals/Meals";
import MaxQuantity from "./Store/Max-Quantity";
import Model from "./UI/Model/Model";
import Cart from "./Components/Cart/Cart";

const mealReducer = (state, action) => {
  if (action.type === "ADDED_MEAL") {
    let mealsQuant = state.meals.reduce((acc, curr) => {
      acc += Number(curr.mealPower);
      return acc;
    }, 0);
    mealsQuant += Number(action.value.mealPower);
  
    let totalAmount = state.meals.reduce((acc, curr) => {
      acc += Number(curr.price) * Number(curr.mealPower);
      return acc;
    }, 0);
    totalAmount += Number(action.value.price) * Number(action.value.mealPower);

    return {
    meals:[...state.meals, action.value],
    mealsQuantity:mealsQuant,
    mealsTotalAmount: totalAmount
    }
  }

  if(action.type === "INCREMENT_HANDLER"){
    return {
      meals: [...state.meals],
      mealsQuantity: Number(state.mealsQuantity) + 1,
      mealsTotalAmount: state.mealsTotalAmount
    }
  }
  if(action.type === "DECREMENT_HANDLER"){
    return {
      meals: [...state.meals],
      mealsQuantity: Number(state.mealsQuantity) - 1,
      mealsTotalAmount: state.mealsTotalAmount
    }
  }

  return {
    meals: [],
    mealsQuantity: 0,
    mealsTotalAmount: 0,
  };
};

function App() {
  const [clicked, setClicked] = useState(false);
  const [mealState, dispatchMSAction] = useReducer(mealReducer, {
    meals: [],
    mealsQuantity: 0,
    mealsTotalAmount: 0
  });

  const mealAddHandler = (newMeal) => {
    dispatchMSAction({ type: "ADDED_MEAL", value: newMeal });
  };

  const cartClickHandler = () => {
    setClicked(true);
  };
  const closeCartHandler = () => {
    setClicked(false);
  }


  return (
    <MaxQuantity.Provider
      value={{
        mealsQuantity: mealState.mealsQuantity,
        totalAmount: mealState.mealsTotalAmount,
        onClose:closeCartHandler,
        onCartClick:cartClickHandler
      }}
    >
      {clicked && (
        <Model>
          <Cart meals={mealState.meals} />
        </Model>
      )}
      <Header/>
      <BackgroundImg />
      <Meals onMealAdd={mealAddHandler} />
    </MaxQuantity.Provider>
  );
}

export default App;




