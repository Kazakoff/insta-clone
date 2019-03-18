import {
  ADD_POST,
  DELETE_POST,
  LOAD_POSTS,
  CLEAR_POSTS
} from "../Data/ActionsTypes";
import userslist from "../Data/UsersList";
import posts from "../Data/PostList";

export const createPost = ({ text, picURL }, user) => ({
  type: ADD_POST,
  payload: {
    dataTime: new Date(),
    // ошибка! пользователь из сторе
    user: userslist[user],
    likes: {},
    content: text,
    pic: picURL
  }
});

export const postsIsLoading = status => ({
  type: "POSTS_IS_LOADING",
  payload: {
    postsIsLoading: status
  }
});

export const loadPost = login => dispatch => {
  setTimeout(() => {
    dispatch({ type: LOAD_POSTS, payload: posts[login] });
    dispatch(postsIsLoading(true));
  }, 2000);
};

export const clearPost = () => ({
  type: CLEAR_POSTS
});

export const deletePost = dataTime => ({
  type: DELETE_POST,
  payload: {
    dataTime
  }
});

export const addLike = dataTime => ({
  type: DELETE_POST,
  payload: {
    dataTime
  }
});
