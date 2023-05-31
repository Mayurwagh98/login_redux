import * as types from "./actionType";

const login = (payload) => {
  
  return {
    type: types.LOGIN,
    payload,
  };
};

const logout = () => {
  return {
    type: types.LOGOUT,
  };
};

export { login, logout };
