import { React } from 'react'
import { connect } from 'react-redux'
import { change } from '../actions/Checkboxes'
import Checkbox from '../components/Checkbox'

const mapStateToProps = (_, initialProps) => {
  const { index } = initialProps
  return(state, props) => {
    const values = state.checkboxReducer.values
    return  {
      ...props,
      value: values[index]
    }
  }
}

export default  connect(mapStateToProps, { change })(Checkbox)
