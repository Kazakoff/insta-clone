import { combineReducers } from "redux";

import { posts } from "./PostsReducer";
import user from "./LoginReducer";
import users from "./userReducer";
import { postsIsLoading } from "./PostsReducer";

const rootReducer = combineReducers({ postsIsLoading, posts, user, users });

export default rootReducer;
