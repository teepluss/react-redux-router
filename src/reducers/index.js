import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import products from './products'
import user from './user'

const reducers = combineReducers({
  user,
  products,
  routing: routerReducer
})

export default reducers
