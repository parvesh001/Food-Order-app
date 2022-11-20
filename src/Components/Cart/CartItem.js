import React, { useContext } from "react";
import Style from "./CartItem.module.css";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import Card from "../../UI/Card/Card";
import CartContext from "../../Store/Cart-Context";

export default function CartItem(props) {
  const cartCtx = useContext(CartContext);

  const plusMealHandler = () => {
    console.log(`i'm plus`);
  };
  const minusMealHandler = () => {
     cartCtx.removeMeal(props.id)
  };
  return (
    <React.Fragment>
      <div className={Style["cart-item"]}>
        <div className={Style["cart-item-information"]}>
          <h2>{props.title}</h2>
          <div>
            <span>{props.price}</span>
          </div>
          <div className={Style["item-power"]}>
            <ImCross className={Style.cross} />
            <span> {props.amount}</span>
          </div>
        </div>

        <div className={Style["cart-item-controls"]}>
          <Card className={Style.control}>
            <BsPlusLg onClick={props.onAdd} />
          </Card>
          <Card className={Style.control}>
            <BiMinus onClick={minusMealHandler} />
          </Card>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
}
