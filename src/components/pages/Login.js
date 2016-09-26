import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { login } from '../../actions/user'

class Login extends React.Component {

  static proptypes = {
    'doLogin': PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    const { isAuthenticated } = this.props
      if (isAuthenticated) {
        browserHistory.replace('/')
      }
  }

  componentWillReceiveProps(nextProps) {
    const { isAuthenticated, redirect } = nextProps
    const { isAuthenticated: wasAuthenticated } = this.props

    if (! wasAuthenticated && isAuthenticated) {
      browserHistory.replace(redirect)
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    let user = this.refs.username.value
    let pass = this.refs.password.value

    this.props.doLogin({
      name: user,
      pass: pass
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p><input type="text" ref="username" placeholder="Username" /></p>
          <p><input type="password" ref="password" placeholder="Password"/></p>
          <p><button type="submit">Login</button> | <a onClick={() => browserHistory.push('/')}>Go to Home</a></p>
        </form>
      </div>
    )
  }
}

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
)(Login)
