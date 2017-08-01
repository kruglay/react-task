import { React } from 'react'
import { connect } from 'react-redux'
import { change } from '../actions/Checkboxes'
import Checkbox from '../components/Checkbox'

const ContCheckbox = (props) => {
  return <Checkbox {...props}/>
}

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

const mapDispatchToProps = (dispatch) => {
  return {
    change: (index, value) => {
      dispatch(change(index, value))
    }
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Checkbox)
