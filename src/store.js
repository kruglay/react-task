import {createStore} from 'redux'
import checkboxReducer from './reducers/Checkbox'
import {combineReducers} from 'redux'

const store = createStore(
  combineReducers({
    checkboxReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
