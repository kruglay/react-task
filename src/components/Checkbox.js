import React from 'react'

const Checkbox = (props) => {
  function handleChange() {
    props.handleChange(props.index)
  }
  return (
    <div>
      <input type="checkbox" defaultChecked={props.selected} onChange={handleChange}/>Some input
    </div>
  )
}

export default Checkbox
