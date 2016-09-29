import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>
          Welcome,
          { this.props.user.isLoggedIn ?
            <span>{this.props.user.name}</span> :
            <span>Guest</span>
          }
        </h1>
        <p>{this.props.products.name}</p>
      </div>
    )
  }
}

export default Home
