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
      <div onClick={() => this.props.changeName()}>{this.props.me.name}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    me: state.me
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
