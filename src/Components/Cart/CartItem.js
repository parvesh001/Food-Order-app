import React from "react";
import Style from "./CartItem.module.css";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

export default function CartItem(props) {
  return (
    <div className={Style["cart-item"]}>
      <div className={Style["cart-item-information"]}>
        <h2>dish</h2>
        <div>
          <span>$22</span>
        </div>
        <div className={Style["item-power"]}>2</div>
      </div>

      <div className={Style["cart-item-controls"]}>
        <div className={Style.control}>
          <BsPlusLg />
        </div>
        <div className={Style.control}>
          <BiMinus />
        </div>
      </div>
    </div>
  );
}
