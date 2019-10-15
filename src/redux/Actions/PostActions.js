import { LIKE_POST, ADD_POST, DELETE_POST, LOAD_POSTS, CLEAR_POSTS } from './ActionsTypes';
import userslist from '../Data/UsersList';

export const createPost = ({ text, picURL }, user) => ({
  type: ADD_POST,
  payload: {
    dataTime: new Date(),
    user: userslist[user],
    likes: {},
    content: text,
    pic: picURL
  }
});

export const postsIsLoading = status => ({
  type: 'POSTS_IS_LOADING',
  payload: {
    postsIsLoading: status
  }
});

export const loadPost = login => (dispatch) => {
  setTimeout(
    () =>
      fetch(`http://localhost:4000/posts?userId=${login}`)
        .then(response => response.json())
        .then(
          (data) => {
            dispatch(postsIsLoading(true));
            dispatch({ type: LOAD_POSTS, payload: data });
          },
          (error) => {
            dispatch(postsIsLoading(true));
            dispatch({ type: LOAD_POSTS, payload: [] });
          }
        ),
    200
  );
};

export const clearPosts = () => ({
  type: CLEAR_POSTS
});

export const deletePost = dataTime => ({
  type: DELETE_POST,
  payload: {
    dataTime
  }
});

export const likePost = (dataTime, currentUser) => ({
  type: LIKE_POST,
  payload: {
    dataTime,
    currentUser
  }
});
