import React, {forwardRef} from 'react'
import classes from './InputForm.module.css'

const InputForm = forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.lable}</label>
      <input ref={ref} {...props.input} />
    </div>
  )
});

export default InputForm