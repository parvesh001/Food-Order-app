import React, {useContext} from 'react'
import classes from './Header.module.css'
import { BsFillCartCheckFill } from "react-icons/bs";
import MealsQuantity from '../../Store/Meals-quantity';


export default function Header() {
  const ctx = useContext(MealsQuantity)
  return (
    <div className={classes.header}>
      <h2>It'sTasty</h2>
      <div className={classes['header-cart-btn']}>
        <div className={classes.cart}><BsFillCartCheckFill/></div>
        <div className={classes['header-cart-title']}><span>your cart</span></div>
        <div className={classes['header-cart-quantity']}><span>{ctx.MealQant}</span></div>
      </div>
    </div>
  )
}
