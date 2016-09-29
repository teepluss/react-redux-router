import React from 'react'
import { connect } from 'react-redux'
import NavigationBar from './NavigationBar'

const App = ({ children, location }) => {
  return (
    <div>
      <NavigationBar location={location} />
      <div className="container">
        <div style={{ marginTop: '1.5em' }}>{children}</div>
      </div>
    </div>
  )
}

export default connect()(App)
