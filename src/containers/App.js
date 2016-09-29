import React from 'react'
import { connect } from 'react-redux'
import Navigation from '../components/partials/Navigation'
import { logout } from '../actions/user'

const App = (props) => {
  const { children, ...navProps } = props

  return (
    <div>
      <Navigation {...navProps} />
      <div className="container">
        <div style={{ marginTop: '1.5em' }}>{ children }</div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
