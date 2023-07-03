import React from "react";
import style from  './style.module.css'
import { useState } from 'react'

export default function Input({
  size,
  width,
  height,
  preactive,
  checked,
  sidepadding,
  padding,
  bgColor,
  color,
  filterid,
  onInput,
  onClick,
  tag='input',
  name,
  type='text',
  value,
  label,
  id,
  options
}) {
  
  const [inputstate, setInputstate] = useState(0)

  const haveChild = tag => {
    if (tag == 'input') return false
    return true
  }

  const selectOptions = options => {
    return options.map((option, key) => (
      <option key={key} value={option[1]}>{option[0]}</option>
    ))
  }
  
  const inputSecondaryHandler = (e) => {
    if (preactive) e.target.checked = false
    setInputstate(1)
    if (onInput) onInput(e)
  }
  
  return (
    <div
      className={`
        ${size ? style[size] : ''} 
        ${sidepadding ? style.sidepadding : ''} 
        ${padding ? style.padding : ''} 
        ${style.div}
      `}
      style={{width: width, height: height, backgroundColor: bgColor, color: color}}>
      {
        React.createElement(
          tag,
          {
            type: type,
            name: name,
            value: value,
            id: id || value,
            className: ``,
            onClick: onClick,
            onInput: inputSecondaryHandler,
            checked: checked && inputstate==0 ? checked : null,
            filterid: filterid,
            style: {backgroundColor: bgColor, color: color},
            className: `${style[tag]} ${style[type]}`,
          },
          haveChild(tag) && options
          ? selectOptions(options)
          : null
        )
      }
      {label ? React.createElement(
        'label',
        {
          htmlFor: id || value,
          className: style.lable
        },
        label) : ''}
    </div>
    )
}