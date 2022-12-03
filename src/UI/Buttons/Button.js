import React from 'react'
import Style from './Button.module.css'

export default function Button(props) {
  return (
    <button disabled={props.disabled} className={`${Style.btn} ${props.className}`} type={props.type} onClick={props.onClick}>
      {props.children || 'Button'}
    </button>
  )
}
