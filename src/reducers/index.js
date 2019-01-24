import { combineReducers } from "redux";
// import { routerReducer } from 'react-router-redux';

import posts from "./PostsReducer";
import users from "./LoginReducer";

// const rootReducer = combineReducers({ posts, router: routerReducer });
const rootReducer = combineReducers({ posts, users });

export default rootReducer;
