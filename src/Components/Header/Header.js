import React, {useContext} from 'react'
import classes from './Header.module.css'
import { BsFillCartCheckFill } from "react-icons/bs";
import MaxQuantity from '../../Store/Max-Quantity';
import Card from '../../UI/Card/Card';


export default function Header(props) {
  const ctx = useContext(MaxQuantity)
  return (
    <div className={classes.header}>
      <h2>It'sTasty</h2>
      <Card onClick={ctx.onCartClick} className={classes['header-cart-btn']}>
        <div className={classes.cart}><BsFillCartCheckFill/></div>
        <div className={classes['header-cart-title']}><span>your cart</span></div>
        <div className={classes['header-cart-quantity']}><span>{ctx.mealsQuantity}</span></div>
      </Card>
    </div>
  )
}
