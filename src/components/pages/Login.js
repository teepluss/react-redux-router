import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router'
import Formsy from 'formsy-react'
import MyInput from '../forms/MyInput'

class Login extends React.Component {

  static propTypes = {
    'doLogin': PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.enableButton = this.enableButton.bind(this)
    this.disableButton = this.disableButton.bind(this)

    this.state = {
      canSubmit: false
    }
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

  enableButton() {
    this.setState({
      canSubmit: true
    })
  }

  disableButton() {
    this.setState({
      canSubmit: false
    })
  }

  handleSubmit(data) {
    this.props.doLogin({
      name: data.username
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-5">
          <Formsy.Form className="form-horizontal" onValidSubmit={this.handleSubmit} onValid={this.enableButton} onInvalid={this.disableButton}>
            <MyInput type="text" name="username" title="Email" validations="isEmail" validationError="This is not a valid email" required/>
            <MyInput type="password" name="password" title="Password" required/>
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default" disabled={!this.state.canSubmit}>Sign in</button> |
              <a onClick={() => browserHistory.push('/')}>Go to Home</a>
            </div>
          </Formsy.Form>
        </div>
      </div>
    )
  }
}

export default Login
