import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store, { history } from "./store";
import { Router, Route, IndexRedirect } from "react-router";
import EntranceForm from "./components/Login";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
// import { Route, Link } from "react-router-dom";

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/">
        <IndexRedirect to="login" />
      </Route>
      <Route path="login" component={EntranceForm} />
      <Route path="posts" component={App} />
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
