import { GET_USER } from './ActionsTypes';

export const getUser = (login, password) => ({
  type: GET_USER,
  payload: {
    login,
    password
  }
});
