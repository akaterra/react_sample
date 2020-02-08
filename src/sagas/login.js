import { LOGIN, loginStatus } from "../actions/login"
import { showPopup } from "../actions/popup"
import { redirect } from "../actions/redirect"
import { all, call, put, putResolve, take, takeEvery, takeLatest } from "redux-saga/effects"

export default function *() {
  while (true) {
    const login = yield take(LOGIN)
    const { payload: { username, password } } = login

    if (username === "admin" && password === "admin") {
      yield putResolve(login)
      yield putResolve(loginStatus(true))
      yield putResolve(redirect('/'))
    } else {
      yield put(showPopup("Invalid username/password"))
    }
  }
}
