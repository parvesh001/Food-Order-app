import React from 'react'
import Card from '../../UI/Card/Card'
import classes from './MealsSummary.module.css'

export default function MealsSummary() {
  return (
    <Card className={classes['meals-summary']}>
      <h2>delecious food, delivered to you</h2>
      <p>choose you favorite meal from our grand collection of meals to bring it to your home.</p>
      <p>all your meals cooked with high quality of ingredients verified by the food coperation of india ltd.</p>
    </Card>
  )
}
