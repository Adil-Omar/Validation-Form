import React from 'react'

export default function Radio(props) {
  return (
    <div style={props.style}>
      <label htmlFor="">{props.title}
        <label style={{marginLeft:"10px"}} htmlFor={props.id1}>{props.val1} <input type="radio" name={props.input} id={props.id1} /></label>
        <label style={{marginLeft:"10px"}} htmlFor={props.id2}>{props.val2} <input type="radio" id={props.id2} name={props.input} /></label>
      </label>
    </div>
  )
}
