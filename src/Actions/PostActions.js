import { ADD_POST, DELETE_POST } from "../Data/ActionsTypes";
export const createPost = ({ title, body }) => ({
  type: ADD_POST,
  payload: {
    title,
    body
  }
});

export const deletePost = dataTime => ({
  type: DELETE_POST,
  payload: {
    dataTime
  }
});
