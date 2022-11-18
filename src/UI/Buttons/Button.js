import React from 'react'
import Style from './Button.module.css'

export default function Button(props) {
  return (
    <button className={Style.btn} type={props.type} onClick={props.inClick}>
      {props.children || 'Button'}
    </button>
  )
}
