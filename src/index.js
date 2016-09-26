import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerActions } from 'react-router-redux'
import configureStore from './store/configureStore'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { App, Home, Login, Foo } from  './components'

import './styles/core.css'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

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
