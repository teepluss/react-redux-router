import React from 'react'

const Foo = ({ products, changeName }) => (
  <div>
    <h1>Foo</h1>
    <p><small>{'* This page is require login.'}</small></p>
    <p><a onClick={() => changeName()}>{products.name}</a></p>
  </div>
)

export default Foo
