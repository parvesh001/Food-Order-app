import React, { useContext } from "react";
import Style from "./CartTotal.module.css";
import ButtonTransparent from "../../UI/Buttons/ButtonTransparent";
import Button from "../../UI/Buttons/Button";
import CartContext from "../../Store/Cart-Context";

export default function CartTotal(props) {
  const cartCtx = useContext(CartContext);
  let totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const orderHandler = () => {
    props.onOrder();
    props.onCartClose();
  };

  return (
    <div className={Style["cart-total"]}>
      <div className={Style["total-amount"]}>
        <h2>Total Amount</h2>
        <h2>{totalAmount}</h2>
      </div>
      <div className={Style["amount-controlers"]}>
        <ButtonTransparent onClick={props.onCartClose}>Close</ButtonTransparent>
        {cartCtx.mealItems.length > 0 && (
          <Button onClick={orderHandler}>Order</Button>
        )}
      </div>
    </div>
  );
}
