import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import BackgroundImg from "./Components/BackgroundImage/BackgroundImg";
import Meals from "./Components/Meals/Meals";
import MaxQuantity from "./Store/Max-Quantity";
import Model from "./UI/Model/Model";
import Cart from "./Components/Cart/Cart";

function App() {
  const [meals, setMeals] = useState([
    { title: "Burger", name: "delecious burger", price: 20, mealPower: 3 },
  ]);
  const [mealsQuantity, setMealsQuantity] = useState(0);
  const [clicked, setClicked] = useState(false);

  const mealAddHandler = (newMeal) => {
    let mealsQuant = meals.reduce((acc, curr) => {
      acc += Number(curr.mealPower);
      return acc;
    }, 0);
    mealsQuant += Number(newMeal.mealPower);
    setMealsQuantity(mealsQuant);

    setMeals((prevMeals) => {
      const allMeals = [...prevMeals];
      allMeals.push(newMeal);
      return allMeals;
    });
  };

  const cartClickHandler = () => {
    setClicked(true);
  };
  const closeHandler =  () => {
    setClicked(false)
  }

  return (
    <MaxQuantity.Provider
      value={{
        mealsQuantity: mealsQuantity,
      }}
    >
      {clicked && (
        <Model>
          <Cart onClick={closeHandler} meals={meals} />
        </Model>
      )}
      <Header onClick={cartClickHandler} />
      <BackgroundImg />
      <Meals onMealAdd={mealAddHandler} />
    </MaxQuantity.Provider>
  );
}

export default App;
