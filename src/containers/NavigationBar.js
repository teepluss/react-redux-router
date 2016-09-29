import React from 'react'
import { connect } from 'react-redux'
import Nav from '../components/partials/Nav'
import { logout } from '../actions/user'

const NavigationBar = (props) => {
  return (
    <Nav {...props} />
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
)(NavigationBar)
