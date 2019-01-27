import { combineReducers } from "redux";
// import { routerReducer } from 'react-router-redux';

import posts from "./PostsReducer";
import user from "./LoginReducer";

// const rootReducer = combineReducers({ posts, router: routerReducer });
const rootReducer = combineReducers(
  { posts: posts, user: user }
  // { posts: [], user: "thtrhntr" }
);

export default rootReducer;
