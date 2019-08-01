import { combineReducers } from 'redux';

import posts from './PostsReducer';
import postsIsLoading from './LoadPosts';
import user from './LoginReducer';
import users from './userReducer';

// const rootReducer = combineReducers({ postsIsLoading, posts, user, users });
const rootReducer = combineReducers({ postsIsLoading, posts, user, users });
export default rootReducer;
