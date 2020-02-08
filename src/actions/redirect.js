export const REDIRECT = "REDIRECT"

export function redirect(url) {
  return {
    type: REDIRECT,
    payload: url,
  }
}