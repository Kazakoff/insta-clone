import ReactDOM from 'react-dom';
import React from 'react';
import { IndexRedirect, Route, Router } from 'react-router-dom';
import Provider from 'react-redux';
import { browserHistory } from 'react-router';
import UserView from './views/UserView';
import AdminView from './views/AdminView';
import store from './redux/store/store';
import EntranceView from './views/Entrance';

/*
      <Route path="/">
        <IndexRedirect to="login" />
      </Route>
*/
const App = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={EntranceView} />
      <Route path="login" component={EntranceView} />
      <Route path="posts" component={UserView} />
      <Route path="admin" component={AdminView} />
    </Router>
  </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
