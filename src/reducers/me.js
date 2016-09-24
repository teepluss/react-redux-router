const initialState = {
  name: 'My name is Tee++'
}

const me = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: 'XXX'
      }
    default:
      return state
  }
}

export default me
