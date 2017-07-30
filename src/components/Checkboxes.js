import React from 'react'
import Checkbox from './Checkbox'

const Checkboxes = (props) => {
  function handleChange(num){
    props.handleChange(num)
  }
  function renderCheckboxes(values) {
    const ar = []
    values.forEach((el, i)=> {
      ar.push(<Checkbox key={i} index={i} selected={el} handleChange={handleChange}/>)
    })
    return ar
  }

  return (
    <div>
      {renderCheckboxes(props.values)}
    </div>
  )
}

export default Checkboxes
