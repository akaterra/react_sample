export const LOGIN = 'LOGIN'
export const LOGIN_STATUS = 'LOGIN_STATUS'
export const LOGOUT = 'LOGOUT'

export function login(username, password) {
  return {
    type: LOGIN,
    payload: { username, password },
  }
}

export function loginStatus(status) {
  return {
    type: LOGIN_STATUS,
    payload: status,
  }
}

export function logout() {
  return {
    type: LOGOUT,
    payload: null,
  }
}
