import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import UserView from './views/UserView';
import AdminView from './views/AdminView';
import store from './redux/store/store';
import EntranceView from './views/Entrance';
import { theme } from './styles';
// <Router history={browserHistory}>

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" component={EntranceView} />
          <Route path="/login" component={EntranceView} />
          <Route path="/posts" component={UserView} />
          <Route path="/admin" component={AdminView} />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
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
