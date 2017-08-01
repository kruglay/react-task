import {createStore, applyMiddleware} from 'redux'
import checkboxReducer from './reducers/Checkbox'
import {combineReducers} from 'redux'
import logger from 'redux-logger'

const store = createStore(
  combineReducers({
    checkboxReducer
  }),
  applyMiddleware(logger)
)

export default store
