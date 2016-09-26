import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

const Nav = ({ location }) => {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">R3 + Auth</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className={classNames({'active': location.pathname === '/'})}>
              <Link to="/">Home</Link>
            </li>
            <li className={classNames({'active': location.pathname === '/foo'})}>
              <Link to="/foo">Foo</Link>
            </li>
            <li className={classNames({'active': location.pathname === '/login'})}>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Nav.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Nav
