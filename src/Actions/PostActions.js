import {
  ADD_POST,
  DELETE_POST,
  LOAD_POSTS,
  CLEAR_POSTS
} from "../Data/ActionsTypes";
import userslist from "../Data/UsersList";

export const createPost = ({ text, picURL }) => ({
  type: ADD_POST,
  payload: {
    dataTime: new Date(),
    user: userslist["V.K@vstu.by"],
    likes: {},
    content: text,
    pic: picURL
  }
});

export const loadPost = posts => ({
  type: LOAD_POSTS,
  payload: posts
});

export const clearPost = posts => ({
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
