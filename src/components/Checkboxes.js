import React from 'react'
import ContCheckbox from '../containers/Checkbox'
import { numOfCheckboxes } from '../constants/initial'

const Checkboxes = (props) => (
  <div>
    {Array(numOfCheckboxes).fill().map((el, i) => (<ContCheckbox key={i} index={i}/>))}
  </div>
)

export default Checkboxes
