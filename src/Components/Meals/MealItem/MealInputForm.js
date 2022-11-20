import React, { useRef } from "react";
import InputForm from "../../../UI/Input/InputForm";
import PlusBtn from "../../../UI/Buttons/PlusBtn";
import globalStyle from '../../../Assets/global-styles/bootstrap.min.module.css'
import cx from 'classnames'

export default function MealInputForm(props) {
    const mealInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    let amount = mealInputRef.current.value;
    let enteredAmount = +amount;
  
    if(enteredAmount < 1 ||  enteredAmount > 5){
        return;
    }
    props.onMealAdd(enteredAmount)
  };

  return (
    <form onSubmit={submitHandler}>
      <InputForm
        ref={mealInputRef}
        lable={"Amount"}
        input={{
          type: "number",
          id: `amount_${Math.random()}`,
          min: "1",
          max: "5",
          defalutvalue: "1",
        }}
      />
      <PlusBtn className={cx(globalStyle['ms-auto'], globalStyle['d-block'])} type="submit" />
    </form>
  );
}
