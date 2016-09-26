import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { routerActions } from 'react-router-redux'

class Login extends React.Component {

  static proptypes = {
    'replace': PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <div>
        <p><input type="text" name="username" placeholder="Username" /></p>
        <p><input type="password" name="password" placeholder="Password"/></p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const isAuthenticated = state.user.name || false
  const redirect = ownProps.location.query.redirect || '/'
  return {
    isAuthenticated,
    redirect
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    replace: routerActions.replace
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
