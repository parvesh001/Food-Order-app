import React from 'react'
import Style from './ButtonTransparent.module.css'

export default function ButtonTransparent(props) {
  return (
    <button className={Style['btn-transparent']} type={props.type} onClick={props.onClick}>
      {props.children || 'Button'}
    </button>
  )
}
