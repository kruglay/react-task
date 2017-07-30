import {createStore} from 'redux'
import checkboxReducer from './reducers/Checkbox'
import {combineReducers} from 'redux'

const store = createStore(
  combineReducers({
    checkboxReducer
  })
)

export default store
