import React from 'react'
import { connect } from 'react-redux'

const Foo = ({ products }) => (
  <div>
    <h1>Foo</h1>
    <p><small>{'* This page is require login.'}</small></p>
  </div>
)

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(
  mapStateToProps
)(Foo)
