import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, IndexRedirect, browserHistory } from "react-router";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import EntranceForm from "./components/Login";

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
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
