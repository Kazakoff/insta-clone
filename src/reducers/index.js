import { combineReducers } from "redux";
// import { routerReducer } from 'react-router-redux';

import posts from "./PostsReducer";
import user from "./LoginReducer";
import users from "./userReducer";

// const rootReducer = combineReducers({ posts, router: routerReducer });
const rootReducer = combineReducers(
  { posts: posts, user: user, users: users }
  // { posts: [], user: "thtrhntr" }
);

export default rootReducer;
