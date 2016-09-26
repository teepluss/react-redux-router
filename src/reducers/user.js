import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../constants'

const initialState = {}
const user = (state = initialState, { type, payload }) => {
  if (type === USER_LOGGED_IN) {
    return payload
  }
  if (type === USER_LOGGED_OUT) {
    return {}
  }
  return state
}

export default user
