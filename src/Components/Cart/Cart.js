import React from "react";
import Style from "./Cart.module.css";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

export default function Cart(props) {
  return (
    <div className={Style.cart}>
      {props.meals.map((meal) => {
        return (
          <CartItem
            key={Math.random().toString()}
            title={meal.title}
            price={meal.price}
            itemPower={meal.mealPower}
          />
        );
      })}
      <CartTotal/>
    </div>
  );
}
