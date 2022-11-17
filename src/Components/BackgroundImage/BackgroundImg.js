import React from 'react'
import classes from './BackgroundImg.module.css'
import mealsImg from '../../Assets/Bg-img.jpg'

export default function BackgroundImg() {
  return (
    <div className={classes['bg-img']}>
      <img src={mealsImg} alt="meal-img"/>
    </div>
  )
}
