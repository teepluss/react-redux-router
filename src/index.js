import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux'
import * as reducers from './reducers'
import thunkMiddleware from 'redux-thunk'
import devTools from 'remote-redux-devtools'
import createLogger from 'redux-logger'
import routes from './routes'
import './styles/core.css'

const baseHistory = browserHistory
const loggerMiddleware = createLogger()
const routingMiddleware = routerMiddleware(baseHistory)
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

const store = createStore(rootReducer, enhance)

// Dev Tools
devTools.updateStore(store);

const history = syncHistoryWithStore(baseHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        {routes}
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
);
