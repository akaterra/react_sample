import { LOGIN_STATUS, LOGOUT } from "../actions/login"

const initialState = {

}

export default (state = initialState, action) => {
  switch (action.type) {
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
