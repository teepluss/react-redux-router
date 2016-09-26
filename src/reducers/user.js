const initialState = {
  name: 'My name is Tee++'
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: 'Something Changed'
      }
    default:
      return state
  }
}

export default user
