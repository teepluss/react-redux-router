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
        <h1>Home</h1>
        <button onClick={() => this.props.changeName()}>{this.props.user.name}</button>
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
    changeName: function() {
      dispatch({ type: 'CHANGE_NAME' })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
