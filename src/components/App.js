import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import Nav from './partials/Nav'

const App = ({ children, location }) => {
  return (
    <div>
      <Nav location={location} />
      <div className="container">
        <div className="main-container">
          <div>
            <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
          </div>
          <div style={{ marginTop: '1.5em' }}>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default connect()(App)
