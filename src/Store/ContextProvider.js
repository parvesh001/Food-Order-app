import React, { useReducer } from "react";
import CartContext from "./Cart-Context";

const defaultState = {
  meals: [],
  totalAmount: 0,
  totalMeals: 0,
}

const mealReducer = (state, action) => {
  if (action.type === "ADD_MEALS") {
    let totalAmount =
      state.totalAmount + action.value.price * action.value.amount;
    let totalMeals = state.totalMeals + action.value.amount;

    let existedMealIdx = state.meals.findIndex((meal) => {
      return meal.id === action.value.id;
    });

    let existedCartItem = state.meals[existedMealIdx];
    let updatedItem;
    let updatedItems;

    if (existedCartItem) {
      updatedItem = {
        ...existedCartItem,
        amount: existedCartItem.amount + action.value.amount,
      };
      updatedItems = [...state.meals];
      updatedItems[existedMealIdx] = updatedItem;
    } else {
      updatedItems = [...state.meals, action.value];
    }

    return {
      meals: [...updatedItems],
      totalAmount,
      totalMeals,
    };
  }

  if (action.type === "REMOVE_MEAL") {
    const removableMealIdx = state.meals.findIndex((meal) => {
      return meal.id === action.id;
    });
    const removableMeal = state.meals[removableMealIdx];
    const totalAmount = state.totalAmount - removableMeal.price;
    const totalMeals = state.totalMeals - 1;

    let updatedMeals;
    if (removableMeal.amount === 1) {
      updatedMeals = state.meals.filter((meal) => meal.id !== action.id);
    } else {
      const updatedMeal = {
        ...removableMeal,
        amount: removableMeal.amount - 1,
      };
      updatedMeals = [...state.meals];
      updatedMeals[removableMealIdx] = updatedMeal;
    }

    return {
      meals: [...updatedMeals],
      totalAmount,
      totalMeals,
    };
  }

  if (action.type === "CLEAR_CART") {
    return defaultState;
  }
};

export default function ContextProvider(props) {
  const [mealState, dispatchMeals] = useReducer(mealReducer, defaultState);

  const addMealHandler = (userMeal) => {
    dispatchMeals({ type: "ADD_MEALS", value: userMeal });
  };
  const removeMealHandler = (id) => {
    dispatchMeals({ type: "REMOVE_MEAL", id: id });
  };
  const clearCartHandler = () => {
    dispatchMeals({ type: "CLEAR_CART" });
  };

  const contextValues = {
    mealItems:mealState.meals,
    totalAmount: mealState.totalAmount,
    totalMeals: mealState.totalMeals,
    addMeal: addMealHandler,
    removeMeal: removeMealHandler,
    clearCart: clearCartHandler,
  }

  return (
    <CartContext.Provider
      value={contextValues}
    >
      {props.children}
    </CartContext.Provider>
  );
}
