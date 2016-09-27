import * as constants from '../constants'
import store from 'store'

export function login(data) {
  // This shoud checking from the database
  let newData = Object.assign({}, data, {
    isLoggedIn: true
  })
  // Store to local storage
  store.set('token', newData)

  return {
    type: constants.USER_LOGGED_IN,
    payload: newData
  }
}

export function logout() {
  // Clear storage
  store.remove('token')
  return {
    type: constants.USER_LOGGED_OUT
  }
}
