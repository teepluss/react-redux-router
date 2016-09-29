import React from 'react'
import { connect } from 'react-redux'
import Login from '../components/pages/Login'
import { login } from '../actions/user'

const LoginPage = (props) => (
  <Login {...props} />
)

const mapStateToProps = (state, ownProps) => {
  const isAuthenticated = state.user.isLoggedIn || false
  const redirect = ownProps.location.query.redirect || '/'
  return {
    isAuthenticated,
    redirect
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    doLogin: (data) => {
      dispatch(login(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)
