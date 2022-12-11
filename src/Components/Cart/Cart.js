import React, { useContext } from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import Model from "../../UI/Model/Model";
import CartContext from "../../Store/Cart-Context";
import classses from "./Cart.module.css";
import useFetch from "../../Hooks/use-fetch";
import Button from "../../UI/Buttons/Button";

export default function Cart(props) {
  const cartCtx = useContext(CartContext);
  const { isLoading, formSubmitted, backendIntraction: postUser } = useFetch();

  const cartAddHandler = (meal) => {
    cartCtx.addMeal({ ...meal, amount: 1 });
  };

  const formSubmitHandler = async (user) => {
    const requestConfig = {
      url: "https://food-order-9ea7b-default-rtdb.firebaseio.com/users.json",
      method: "POST",
      body: { userInformation: user, orderedMeals: cartCtx.mealItems },
      headers: {
        "content-type": "application/json",
      },
    };
    await postUser(requestConfig);
    cartCtx.clearCart();
  };

  const cartMeals = (
    <ul className={classses.itemList}>
      {cartCtx.mealItems.map((meal) => {
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
      })}
    </ul>
  );

  let modelContent = (
    <React.Fragment>
      {cartMeals}
      <CartTotal
        isLoading={isLoading}
        formSubmitted={formSubmitted}
        onSubmit={formSubmitHandler}
        onCartClose={props.onCartClose}
      />
    </React.Fragment>
  );

  if (formSubmitted) {
    modelContent = (
      <React.Fragment>
        <p>Order is placed successfully!</p>
        <Button onClick={props.onCartClose} className={classses.closeBtn}>Close</Button>
      </React.Fragment>
    );
  }

  return <Model>{modelContent}</Model>;
}
