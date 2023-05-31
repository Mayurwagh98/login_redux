import * as types from "./actionType";

const initialState = {
  loggedIn: false,
  user: null,
};

const reducer = (oldState = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case types.LOGIN:
      return {
        ...oldState,
        loggedIn: true,
        user: payload,
      };
    case types.LOGOUT:
      return {
        ...oldState,
        loggedIn: false,
        user: null,
      };
    default:
      return oldState;
  }
};

export default reducer