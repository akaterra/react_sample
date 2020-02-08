import { SHOW_POPUP, HIDE_POPUP } from "../actions/popup"

const initialState = {
  popup: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_POPUP:
      return {
        ...state,
        popup: {
          isPopupShown: true,
          popupText: action.payload,
        }
      }

    case HIDE_POPUP:
      return {
        ...state,
        popup: {
          isPopupShown: false,
          popupText: null,
        }
      }
  }

  return state
}
