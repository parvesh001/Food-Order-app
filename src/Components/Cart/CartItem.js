import React, { useState } from "react";
import Style from "./CartItem.module.css";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import Card from "../../UI/Card/Card";

export default function CartItem(props) {
  const [mealPower, setMealPower] = useState(props.mealPower)
  
  const plusClickHandler = () =>{
       setMealPower((prevMealPower)=> {
       let newPower = Number(prevMealPower) + 1
        return newPower
       })
  }
  const minusClickHandler = () => {
    setMealPower((prevMealPower)=> {
      let newPower = Number(prevMealPower) - 1
       return newPower
      })
  }
  if(mealPower > 0){
    return (
      <React.Fragment>
      <div className={Style["cart-item"]}>
        <div className={Style["cart-item-information"]}>
          <h2>{props.title}</h2>
          <div>
            <span>${props.price}</span>
          </div>
          <div className={Style["item-power"]}><ImCross className={Style.cross}/><span> {mealPower}</span></div>
        </div>
  
        <div className={Style["cart-item-controls"]}>
          <Card onClick={plusClickHandler} className={Style.control}>
            <BsPlusLg/>
          </Card>
          <Card onClick={minusClickHandler} className={Style.control}>
            <BiMinus/>
          </Card>
        </div>
      </div>
      <hr />
      </React.Fragment>
    );
  }
  
}
