import { LOGIN } from "../actions/login"
import { showPopup } from "../actions/popup"
import { all, call, put, take, takeEvery, takeLatest } from "redux-saga/effects"

export default function *() {
  while (true) {
    const { payload: { username, password } } = yield take(LOGIN)

    if (username === "admin" && password === "admin") {

    } else {
      yield put(showPopup("Invalid username/password"))
    }
  }
}
