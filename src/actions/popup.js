export const SHOW_POPUP = 'SHOW_POPUP'
export const HIDE_POPUP = 'HIDE_POPUP'

export function showPopup(text) {
  return {
    type: SHOW_POPUP,
    payload: text,
  }
}

export function hidePopup() {
  return {
    type: HIDE_POPUP,
    payload: null,
  }
}
