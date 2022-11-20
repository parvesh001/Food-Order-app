import React, { useReducer } from "react";
import CartContext from "./Cart-Context";

const mealReducer = (state, action) => {
  if (action.type === "ADD_MEALS") {
    let totalAmount =
      state.totalAmount + action.value.price * action.value.amount;
    let totalMeals = state.totalMeals + action.value.amount;

    let existedMealIdx = state.mealItems.findIndex((meal) => {
      return meal.id === action.value.id;
    });

    let existedCartItem = state.mealItems[existedMealIdx];
    let updatedItem;
    let updatedItems;

    if (existedCartItem) {
      updatedItem = {
        ...existedCartItem,
        amount: existedCartItem.amount + action.value.amount,
      };
      updatedItems = [...state.mealItems];
      updatedItems[existedMealIdx] = updatedItem;
    } else {
      updatedItems = [...state.mealItems, action.value];
    }

    return {
      mealItems: [...updatedItems],
      totalAmount,
      totalMeals,
    };
  }

  if (action.type === "REMOVE_MEAL") {
    const removableMealIdx = state.mealItems.findIndex((meal) => {
      return meal.id === action.id;
    });
    const removableMeal = state.mealItems[removableMealIdx];
    const totalAmount = state.totalAmount - removableMeal.price;
    const totalMeals = state.totalMeals - 1;

    let updatedMeals;
    if (removableMeal.amount === 1) {
      updatedMeals = state.mealItems.filter((meal) => meal.id !== action.id);
    } else {
       const updatedMeal = {...removableMeal, amount: removableMeal.amount - 1}
       updatedMeals = [...state.mealItems];
       updatedMeals[removableMealIdx] = updatedMeal;
    }

    return {
      mealItems: [...updatedMeals],
      totalAmount,
      totalMeals,
    };
  }
};

export default function ContextProvider(props) {
  const [mealState, dispatchMeals] = useReducer(mealReducer, {
    mealItems: [],
    totalAmount: 0,
    totalMeals: 0,
  });

  const addMealHandler = (userMeal) => {
    dispatchMeals({ type: "ADD_MEALS", value: userMeal });
  };
  const removeMealHandler = (id) => {
    dispatchMeals({ type: "REMOVE_MEAL", id: id });
  };

  return (
    <CartContext.Provider
      value={{
        mealItems: [...mealState.mealItems],
        totalAmount: mealState.totalAmount,
        totalMeals: mealState.totalMeals,
        addMeal: addMealHandler,
        removeMeal: removeMealHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
