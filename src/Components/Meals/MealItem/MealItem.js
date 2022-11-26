import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealInputForm from "./MealInputForm";
import CartContext from "../../../Store/Cart-Context";

export default function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const addMealHandler = (amount) => {
    
    cartCtx.addMeal({
      amount:amount,
      id:props.id,
      title:props.title,
      price:props.price
    })
  }
  // console.log(props.name)
  return (
    <React.Fragment>
      <li className={classes["meal-item"]}>
        <div className={classes["about-meal-item"]}>
          <h3>{props.title}</h3>
          <em>{props.name}</em>
          <div>
            <span>{price}</span>
          </div>
        </div>
        <div>
          <MealInputForm onMealAdd={addMealHandler}/>
        </div>
      </li>
      <hr />
    </React.Fragment>
  );
}
