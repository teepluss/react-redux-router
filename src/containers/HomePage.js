import React from 'react'
import { connect } from 'react-redux'
import Home from '../components/pages/Home'

const HomePage = (props) => (
  <Home {...props} />
)

const mapStateToProps = (state) => {
  return {
    user: state.user,
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
