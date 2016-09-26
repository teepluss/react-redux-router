import React from 'react'
import { browserHistory } from 'react-router'

const Foo = () => (
  <div>
    <h1>Foo</h1>
    <button onClick={() => browserHistory.push('/')}>Go to HOME</button>
  </div>
)

export default Foo
