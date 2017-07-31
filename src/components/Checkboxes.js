import React from 'react'
import ContCheckbox from '../containers/Checkbox'
import { numOfCheckboxes } from '../constants/initial'

const Checkboxes = (props) => {
  function renderCheckboxes(num) {
    const ar = []
    for (let i = 0; i < num; i++){
      ar.push(<ContCheckbox key={i} index={i}/>)
    }
    return ar
  }

  return (
    <div>
      {renderCheckboxes(numOfCheckboxes)}
    </div>
  )
}

export default Checkboxes
