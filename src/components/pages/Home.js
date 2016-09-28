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
        <div>{this.props.products.name}</div>
        <button onClick={() => this.props.changeName()}>Change Name</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: () => {
      dispatch({
        type: 'CHANGE_PRODUCT_NAME',
        name: 'new name'
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
