import React, { useState } from "react";
import classes from "./MealItem.module.css";
import PlusBtn from "../../../UI/Buttons/PlusBtn";

export default function MealItem(props) {
  const [quantity, setQuantity] = useState(0);

  const quantityChangeHandler = (event) => {
    setQuantity(event.target.value);
  };
  const mealAddHandler = () => {
    const meal = {
      title: props.title,
      name: props.name,
      price: props.price,
      mealPower: quantity
    };
    props.onMealAdd(meal)
  };

  return (
    <div className={classes["meal-item"]}>
      <div className={classes["about-meal-item"]}>
        <h3>{props.title}</h3>
        <em>{props.name}</em>
        <div>
          <span>${props.price}</span>
        </div>
      </div>
      <div className={classes["fix-meal-item"]}>
        <div className={classes["fix-meal-quantity"]}>
          <label htmlFor="meal-quantity">quantity</label>
          <input
            onChange={quantityChangeHandler}
            type="number"
            name="meal-quantity"
            id="meal-quantity"
          />
        </div>
        <PlusBtn onClick={mealAddHandler} className={classes["plus-btn"]} />
      </div>
    </div>
  );
}
