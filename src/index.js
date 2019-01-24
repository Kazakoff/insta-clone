import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store, { history } from "./store";
import { Router, Route } from "react-router";
import LoginForm from "./components/Login";
// import { Route, Link } from "react-router-dom";

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/login" component={LoginForm} />
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
