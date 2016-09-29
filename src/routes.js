import React from 'react'
import { routerActions } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { Route, IndexRoute } from 'react-router'
import {
  App,
  HomePage,
  FooPage,
  LoginPage
} from './containers'


// Redirects to /login by default
const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
  predicate: user => user.isLoggedIn
})

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="foo" component={UserIsAuthenticated(FooPage)}/>
    <Route path="login" component={LoginPage}/>
  </Route>
)
