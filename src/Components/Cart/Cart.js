import React from "react";
import Style from "./Cart.module.css";
import CartItem from "./CartItem";

export default function Cart(props) {
  return (
    <div className={Style.cart}>
     {props.meals.map((meal) => {
        return (
          <CartItem
            title={meal.title}
            price={meal.price}
            itemPower={meal.mealPower}
          />
        );
      })}
      <button onClick={props.onClick}>close</button>
    </div>
  );
}
