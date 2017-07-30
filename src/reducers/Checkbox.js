import { numOfCheckboxes } from '../constants/initial'

const initialState = {
  justPressed: -1,
  values: Array(numOfCheckboxes).fill(false)
}

const checkboxReducer = (state = initialState, action) => {
  let newState = {}
  switch (action.type) {
    case "CHANGE":
      newState = {
        ...state,
        justPressed: action.payload
      }
      newState.values[action.payload] = !newState.values[action.payload]
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
