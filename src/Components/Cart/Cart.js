import React, { useContext } from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import Model from "../../UI/Model/Model";
import CartContext from "../../Store/Cart-Context";

export default function Cart(props) {
  const cartCtx = useContext(CartContext);

  const cartAddHandler = (meal) => {
       cartCtx.addMeal({...meal, amount:1})
  }

  const cartMeals = cartCtx.mealItems.map((meal) => {
    return (
      <CartItem
        key={meal.id}
        title={meal.title}
        price={meal.price}
        id={meal.id}
        amount={meal.amount}
        onAdd={cartAddHandler.bind(null, meal)}
      />
    );
  });

  return (
    <Model>
      {cartMeals}
      <CartTotal onCartClose={props.onCartClose} />
    </Model>
  );
}
