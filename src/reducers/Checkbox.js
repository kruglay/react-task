import { numOfCheckboxes } from '../constants/initial'

const initialState = {
  values: Array(numOfCheckboxes).fill(false)
}

const checkboxReducer = (state = initialState, action) => {
  let newState = {}
  switch (action.type) {
    case "CHANGE":
      newState = { ...state }
      newState.values[action.payload.index] = action.payload.value
      return newState
    case "TRY":
      return newState = {
        values: "checkboxReducer"
      }
    default:
      return newState = {...state}
  }
}

export default checkboxReducer
