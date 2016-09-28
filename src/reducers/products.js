const initialState = {
  name: 'Product X'
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PRODUCT_NAME':
      return {
        ...state,
        name: action.name
      }
    default:
      return state
  }
}

export default products
