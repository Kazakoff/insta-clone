import { combineReducers } from 'redux';

import { posts, postsIsLoading } from './PostsReducer';
import user from './LoginReducer';
import users from './userReducer';

const rootReducer = combineReducers({ postsIsLoading, posts, user, users });

export default rootReducer;
