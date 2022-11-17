import React, {useState} from 'react'
import classes from './MealItem.module.css'
import PlusBtn from '../../../UI/Buttons/PlusBtn'

export default function MealItem(props) {
 const [quantity, setQuantity] = useState();

 const quantityChangeHandler = (event) => {
  setQuantity(event.target.value);
 }
 const quantityAddHandler = () => {
   props.onQuantityAdd(quantity)
 }

  return (
    <div className={classes['meal-item']}>
      <div className={classes['about-meal-item']}>
        <h3>{props.title}</h3>
        <em>{props.name}</em>
        <div><span>${props.price}</span></div>
      </div>
      <div className={classes['fix-meal-item']}>
         <div className={classes['fix-meal-quantity']}>
          <label htmlFor="meal-quantity">quantity</label>
          <input onChange={quantityChangeHandler} type="number" name="meal-quantity" id="meal-quantity" />
         </div>
         <PlusBtn onClick={quantityAddHandler} className={classes['plus-btn']}/>
      </div>
    </div>
  )
}
