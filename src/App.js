import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import UserView from './views/UserView';
import AdminView from './views/AdminView';
import store from './redux/store/store';
import EntranceView from './views/Entrance';
// <Router history={browserHistory}>

const App = () => (
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={EntranceView} />
        <Route path="/login" component={EntranceView} />
        <Route path="/posts" component={UserView} />
        <Route path="/admin" component={AdminView} />
      </BrowserRouter>
    </Provider>
  </div>
);

/* const App = () => (
  <div>
    <BrowserRouter>
      <Route path="/admin" component={AdminView} />
    </BrowserRouter>
  </div>
);
*/
export default App;
