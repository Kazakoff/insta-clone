import { GET_USER } from "../Data/ActionsTypes";

const getUser = (login, password) => ({
  type: GET_USER,
  payload: {
    login,
    password
  }
});

export default getUser;
