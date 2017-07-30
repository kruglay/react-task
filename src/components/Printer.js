import React from 'react'

const Printer = (props) => {
  return (
    <div>
      <p>Pressed input with index {props.index}</p>
      <p>Pressed at all {props.pressedAtAll}</p>
    </div>

  )
}

export default Printer