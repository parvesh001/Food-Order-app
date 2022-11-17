import React from 'react'
import classes from './PlusBtn.module.css'

export default function PlusBtn(props) {
  return (
    <button className={`${classes['plus-btn']} ${props.className}`} type={props.type} onClick={props.onClick}>
      +Add
    </button>
  )
}
