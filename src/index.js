import "@babel/polyfill"
import React, { Component } from "react"
import ReactDOM from "react-dom"
import { applyMiddleware, compose, createStore, combineReducers } from "redux"
import { Provider, useDispatch, useSelector } from 'react-redux'
import createSagaMiddleware  from "redux-saga"
import LoginForm from "./components/organisms/login-form"
import withPopup from "./hocs/with-popup"
import { login } from "./actions/login"
import loginReducer from "./reducers/login"
import popupReducer from "./reducers/popup"
import loginSaga from "./sagas/login"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  DefaultRoute,
  useParams,
  withRouter
} from "react-router-dom";

// middelwares
const sagaMiddleware = createSagaMiddleware()

const routeMiddleware = (store) => (next) => (action) => {
  if (action.type === 'REDIRECT') {
    window.location.assign(action.payload)

    return
  } 

  return next(action)
}

// store
const store = createStore(
  combineReducers({
    login: loginReducer,
    popup: popupReducer,
  }),
  compose(
    applyMiddleware(sagaMiddleware),
  )
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

const AppEntryRoute = ({ loginRedirect, mainRedirect }) => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated)

  return <Redirect from="/" exact to={ isAuthenticated ? mainRedirect : loginRedirect } />
}

const LoginRoute = ({ children, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated)

  return <Route {...rest} render={(props) => {
    return isAuthenticated === true
      ? <Redirect to='/' />
      : children
  }} />
}

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated)

  return <Route {...rest} render={(props) => {
    return isAuthenticated === true
      ? children
      : <Redirect to='/login' />
  }} />
}

const AppWithPopup = withPopup(App, 'popup')

function Hello(props) {
  const username = useSelector((state) => state.login.username)

  return <div>Hello, {username}!</div>
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <LoginRoute exact path="/login">
          <AppWithPopup />
        </LoginRoute>
        <PrivateRoute path="/hello">
          <Hello />
        </PrivateRoute>
        <AppEntryRoute loginRedirect="/login" mainRedirect="/hello" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("container")
)
