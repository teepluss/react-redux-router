import React from 'react'
import { connect } from 'react-redux'
import Nav from './partials/Nav'

const App = ({ children, location }) => {
  return (
    <div>
      <Nav location={location} />
      <div className="container">
        <div className="main-container">
          <div style={{ marginTop: '1.5em' }}>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default connect()(App)
