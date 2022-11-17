import React from 'react'
import AvailableMeals from './AvailableMeals'
import MealsSummary from './MealsSummary'

export default function Meals(props) {
  const mealAddHandler = (newMeal)=>{
    props.onMealAdd(newMeal)
  }
  return (
    <React.Fragment>
      <MealsSummary/>
      <AvailableMeals onMealAdd={mealAddHandler} />
    </React.Fragment>
  )
}
