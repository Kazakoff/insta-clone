import { createStore, compse } from "redux";
// import { syncHistoryWithStore} from 'react-router-redux';
// import { browserHistory } from "react-router";
import { createHistory } from "history";
// import the root reducer
import rootReducer from "./reducers/index";

import posts from "./Data/PostList";

// create an object for the default data
const user = "V.K@vstu.by";
const defaultState = {
  posts: posts[user],
  user
};

export const history = createHistory();
const store = createStore(rootReducer, defaultState);

// export const history = syncHistoryWithStore(browserHistory, store);

export default store;
