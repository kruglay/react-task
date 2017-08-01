import React from 'react'

const Checkbox = (props) => {
  console.log("render Checkbox");
  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={props.value}
        onChange={(e) => {props.change(props.index, props.value)}}
      />Some input
    </div>
  )
}

export default Checkbox
