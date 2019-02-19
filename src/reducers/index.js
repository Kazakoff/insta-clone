import { combineReducers } from "redux";

import posts from "./PostsReducer";
import user from "./LoginReducer";
import users from "./userReducer";

const rootReducer = combineReducers({ posts: posts, user: user, users: users });

export default rootReducer;
