import React, {useContext} from "react";
import classes from "./HeaderCartButton.module.css";
import { BsFillCartCheckFill } from "react-icons/bs";
import CartContext from '../../Store/Cart-Context'

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  return (
    <button onClick={props.onClick} className={classes["header-cart-btn"]}>
      <div className={classes.cart}>
        <BsFillCartCheckFill />
      </div>
      <div className={classes["header-cart-title"]}>
        <span>your cart</span>
      </div>
      <div className={classes["header-cart-quantity"]}>
        <span>{cartCtx.totalMeals}</span>
      </div>
    </button>
  );
}
