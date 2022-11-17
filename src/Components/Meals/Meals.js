import React from 'react'
import AvailableMeals from './AvailableMeals'
import MealsSummary from './MealsSummary'

export default function Meals(props) {
  const quantityAddHandler = (quantity)=>{
    props.onQuantityAdd(quantity)
  }
  return (
    <React.Fragment>
      <MealsSummary/>
      <AvailableMeals onQuantityAdd={quantityAddHandler}/>
    </React.Fragment>
  )
}
