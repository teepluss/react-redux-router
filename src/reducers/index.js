import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import products from './products'
import me from './me'

const reducers = combineReducers({
  me,
  products,
  routing: routerReducer
})

export default reducers
