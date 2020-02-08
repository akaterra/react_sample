import { LOGIN, LOGIN_STATUS, LOGOUT } from "../actions/login"

const initialState = {
  isAuthenticated: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        username: action.payload.username,
      }

    case LOGIN_STATUS:
      return {
        ...state,
        isAuthenticated: action.payload,
      }

    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      }
  }

  return state
}
