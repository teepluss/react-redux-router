import React from 'react'
import { connect } from 'react-redux'

const Foo = ({ products }) => (
  <div>
    <h1>Foo {products.name}</h1>
    <p><small>{'* This page is require login.'}</small></p>
  </div>
)

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(
  mapStateToProps
)(Foo)
