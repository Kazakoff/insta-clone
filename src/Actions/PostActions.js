import { ADD_POST, DELETE_POST } from "../Data/ActionsTypes";
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

export const deletePost = dataTime => ({
  type: DELETE_POST,
  payload: {
    dataTime
  }
});
