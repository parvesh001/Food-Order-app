import React, { useContext } from "react";
import Style from "./CartItem.module.css";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import Card from "../../UI/Card/Card";
import MaxQuantity from "../../Store/Max-Quantity";

export default function CartItem(props) {
  const ctx = useContext(MaxQuantity)
  return (
    <React.Fragment>
    <div className={Style["cart-item"]}>
      <div className={Style["cart-item-information"]}>
        <h2>{props.title}</h2>
        <div>
          <span>${props.price}</span>
        </div>
        <div className={Style["item-power"]}><ImCross className={Style.cross}/><span> {props.itemPower}</span></div>
      </div>

      <div className={Style["cart-item-controls"]}>
        <Card className={Style.control}>
          <BsPlusLg onClick={ctx.increment}/>
        </Card>
        <Card className={Style.control}>
          <BiMinus onClick={ctx.decrement}/>
        </Card>
      </div>
    </div>
    <hr />
    </React.Fragment>
  );
}
