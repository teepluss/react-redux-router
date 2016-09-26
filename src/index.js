import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware, routerReducer, routerActions } from 'react-router-redux'
import * as reducers from './reducers'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { App, Home, Login, Foo } from  './components'
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
  )
)

const store = createStore(rootReducer, enhance)
const history = syncHistoryWithStore(baseHistory, store)

// Redirects to /login by default
const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user, // how to get the user state
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
})

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="foo" component={UserIsAuthenticated(Foo)}/>
          <Route path="login" component={Login}/>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
);
