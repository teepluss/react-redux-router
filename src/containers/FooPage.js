import React from 'react'
import { connect } from 'react-redux'
import Foo from '../components/pages/Foo'

const FooPage = (props) => (
  <Foo {...props} />
)

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: () => {
      dispatch({
        type: 'CHANGE_PRODUCT_NAME',
        name: 'iPhone 8s'
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooPage)
