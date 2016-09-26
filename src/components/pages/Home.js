import React from 'react'
import { connect } from 'react-redux'

// const Home = ({ me, changeName }) => (
//   <div onClick={() => changeName()}>{me.name}</div>
// )

class Home extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
