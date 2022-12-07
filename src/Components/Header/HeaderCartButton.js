import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import { BsFillCartCheckFill } from "react-icons/bs";
import CartContext from "../../Store/Cart-Context";
import globalStyle from "../../Assets/global-styles/bootstrap.min.module.css";
import cx from "classnames";

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const [isBumped, setIsBumped] = useState(false);

  const btnClass = `${classes["header-cart-btn"]} ${
    isBumped ? classes["bump-up"] : ""
  }`;

  useEffect(() => {
    if (cartCtx.mealItems.length === 0) {
      return;
    }
    setIsBumped(true);

    let timer = setTimeout(() => {
      setIsBumped(false);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.mealItems]);

  return (
    <button
      onClick={props.onClick}
      className={cx(
        btnClass,
        globalStyle["px-3"],globalStyle["py-2"],
        globalStyle["px-md-5"],
        globalStyle["py-md-3"]
      )}
    >
      <div className={classes.cart}>
        <BsFillCartCheckFill />
      </div>
      <div
        className={cx(
          classes["header-cart-title"],
          globalStyle["d-none"],
          globalStyle["d-md-block"]
        )}
      >
        <span>your cart</span>
      </div>
      <div className={classes["header-cart-quantity"]}>
        <span>{cartCtx.totalMeals}</span>
      </div>
    </button>
  );
}
