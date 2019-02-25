import {
  ADD_POST,
  DELETE_POST,
  LOAD_POSTS,
  CLEAR_POSTS
} from "../Data/ActionsTypes";
import userslist from "../Data/UsersList";
import posts from "../Data/PostList";

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

/*export const loadPost = posts => ({
  type: LOAD_POSTS,
  payload: posts
});
*/
export const loadPost = login => dispatch => {
  setTimeout(() => {
    console.log("I got tracks");
    dispatch({ type: LOAD_POSTS, payload: posts[login] });
  }, 2000);
};

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
