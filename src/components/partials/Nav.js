import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { logout } from '../../actions/user'
import _ from 'lodash'

const Nav = ({ user, location, logout, dispatch }) => {
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
              <Link to="/foo">
                { ! user.isLoggedIn ?
                  <i className="glyphicon glyphicon-lock"></i>
                  : ''
                }
                Foo
              </Link>
            </li>
            { _.get(user, 'isLoggedIn') ?
              <li>
                <a onClick={() => logout()}>Log Out</a>
              </li>:
              <li className={classNames({'active': location.pathname === '/login'})}>
                <Link to="/login">Login</Link>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

Nav.propTypes = {
  user: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)
