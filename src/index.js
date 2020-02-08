import "@babel/polyfill"
import React, { Component } from "react"
import ReactDOM from "react-dom"
import { applyMiddleware, createStore, combineReducers } from "redux"
import { Provider, useDispatch } from 'react-redux'
import createSagaMiddleware  from "redux-saga"
import LoginForm from "./components/organisms/login-form"
import withPopup from "./hocs/with-popup"
import { showPopup } from "./actions/popup"
import { login } from "./actions/login"
import popupReducer from "./reducers/popup"
import loginSaga from "./sagas/login"

// sagas
const sagaMiddleware = createSagaMiddleware()

// store
const store = createStore(
  combineReducers({
    popup: popupReducer,
  }),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(loginSaga)

// app
function App() {
  const dispatch = useDispatch()

  return <div>
    <LoginForm onSubmit={({username, password}) => {
      dispatch(login(username, password))
    }} />
  </div>
}

const AppWithPopup = withPopup(App, 'popup')

ReactDOM.render(
  <Provider store={store}>
    <AppWithPopup />
  </Provider>,
  document.getElementById("container")
)
