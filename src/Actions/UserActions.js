import GET_USER from "../Data/ActionsTypes";

export const getUser = ({ login, password }) => ({
  type: GET_USER,
  payload: {
    login,
    password
  }
});
