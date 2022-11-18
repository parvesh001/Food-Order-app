import React from 'react'
import classes from './Card.module.css'

export default function Card(props) {
  return (
    <div className={`${classes.card} ${props.className}`} onClick={props.onClick}>
      {props.children}
    </div>
  )
}
