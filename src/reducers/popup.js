import { SHOW_POPUP, HIDE_POPUP } from "../actions/popup"

const initialState = {

}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_POPUP:
      return {
        isPopupShown: true,
        popupText: action.payload,
      }

    case HIDE_POPUP:
      return{
        isPopupShown: false,
        popupText: null,
      }
  }

  return state
}
