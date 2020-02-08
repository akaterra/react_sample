import "@babel/polyfill"
import React, { Component } from "react"
import ReactDOM from "react-dom"
import { applyMiddleware, createStore, combineReducers } from "redux"
import { Provider, useDispatch, useSelector } from 'react-redux'
import createSagaMiddleware  from "redux-saga"
import LoginForm from "./components/organisms/login-form"
import withPopup from "./hocs/with-popup"
import { showPopup } from "./actions/popup"
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
// const route = routerMiddleware(browserHistory)

// store
const store = createStore(
  combineReducers({
    login: loginReducer,
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

const RootRoute = (loginRedirect, mainRedirect) => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated)

  return <Redirect from="/" exact to={ isAuthenticated ? loginRedirect : mainRedirect } />
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    const isAuthenticated = useSelector((state) => state.isAuthenticated)

    isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  }} />
)

const AppWithPopup = withPopup(App, 'popup')

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/login">
          <AppWithPopup />
        </Route>
        <PrivateRoute path="/hello">
          Hello!
        </PrivateRoute>
        <RootRoute loginRedirect="/login" mainRedirect="/hello" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("container")
)
