import React, { useContext } from 'react'
import Style from './CartTotal.module.css'
import ButtonTransparent from "../../UI/Buttons/ButtonTransparent"
import Button from '../../UI/Buttons/Button'
import MaxQuantity from '../../Store/Max-Quantity'

export default function CartTotal() {
    const ctx = useContext(MaxQuantity);
  return (
    <div className={Style['cart-total']}>
      <div className={Style["total-amount"]}>
        <h2>Total Amount</h2>
        <h2>${ctx.totalAmount}</h2>
      </div>
      <div className={Style["amount-controlers"]}>
      <ButtonTransparent>Close</ButtonTransparent>
      <Button>Order</Button>
      </div>
    </div>
  )
}
