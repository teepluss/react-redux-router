import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import devTools from 'remote-redux-devtools'
import createLogger from 'redux-logger'
import * as reducers from '../reducers'

const loggerMiddleware = createLogger()
const routingMiddleware = routerMiddleware(browserHistory)
const rootReducer = combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}))

const enhance = compose(
  applyMiddleware(
    routingMiddleware,
    thunkMiddleware,
    loggerMiddleware
  ),
  devTools()
)

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhance)

  // Dev Tools
  devTools.updateStore(store);

  return store;
}
