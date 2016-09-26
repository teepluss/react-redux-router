import * as constants from '../constants'

export function login(data) {
  let newData = Object.assign({}, data, {
    isLoggedIn: true
  })

  return {
    type: constants.USER_LOGGED_IN,
    payload: newData
  }
}

export function logout() {
  return {
    type: constants.USER_LOGGED_OUT
  }
}
