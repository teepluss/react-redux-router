import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import * as reducers from '../reducers'

const routingMiddleware = routerMiddleware(browserHistory)
const rootReducer = combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}))

const enhance = compose(
  applyMiddleware(
    routingMiddleware,
    thunkMiddleware
  )
)

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhance)
  return store;
}
