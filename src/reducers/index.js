import { combineReducers } from "redux";
// import { routerReducer } from 'react-router-redux';

import posts from "./PostsReducer";

// const rootReducer = combineReducers({ posts, router: routerReducer });
const rootReducer = combineReducers({ posts });

export default rootReducer;
