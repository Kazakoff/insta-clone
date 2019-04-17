import { LIKE_POST, ADD_POST, DELETE_POST, LOAD_POSTS, CLEAR_POSTS } from "../Data/ActionsTypes";
import userslist from "../Data/UsersList";
import posts from "../Data/PostList";

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
  type: "POSTS_IS_LOADING",
  payload: {
    postsIsLoading: status
  }
});

export const loadPost = login => dispatch => {
  setTimeout(() => {
    return fetch(`http://localhost:4000/posts?userId=${login}`)
      .then(response => response.json())
      .then(
        data => {
          console.log("!!!!!!!");
          console.log(data);
          dispatch(postsIsLoading(true));
          dispatch({ type: LOAD_POSTS, payload: data });
        },
        error => {
          console.log("??????");
          console.log(error);
          dispatch(postsIsLoading(true));
          dispatch({ type: LOAD_POSTS, payload: [] });
        }
      );
  }, 200);
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

export const addLike = dataTime => ({
  type: LIKE_POST,
  payload: {
    dataTime
  }
});
