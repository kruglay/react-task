import React from 'react'

const Checkbox = (props) => {
  console.log("render Checkbox");
  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={props.chbState.value}
        onChange={(e) => {props.change(props.index, props.chbState.value)}}
      />Some input
    </div>
  )
}

export default Checkbox
