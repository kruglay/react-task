
const initialState = {
  index: -1,
  value: false
}

const checkboxReducer = (state = initialState, action) => {
  let newState = {}
  switch (action.type) {
    case "CHANGE":
      newState = { ...action.payload }
      return newState
    case "TRY":
      return newState = {
        index: -1,
        value: "checkboxReducer"
      }
    default:
      return newState = {...state}
  }
}

export default checkboxReducer
