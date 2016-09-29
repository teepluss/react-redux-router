const initialState = {
  name: 'iPhone 7'
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PRODUCT_NAME' :
      //console.log('xxxx')
      return {
        ...state,
        name: action.name
      }
    default:
      return state
  }
}

export default products
