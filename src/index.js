import React, { Component } from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux";
import { Provider, useDispatch } from 'react-redux'
import LoginForm from "./components/organisms/login-form"
import withPopup from "./hocs/with-popup"
import { showPopup } from "./actions/popup"
import rootReducer from "./reducers/root"

const store = createStore(rootReducer)

function App() {
  const dispatch = useDispatch()

  return <div>
    <LoginForm onSubmit={(u) => {
      dispatch(showPopup("processing login"))
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
