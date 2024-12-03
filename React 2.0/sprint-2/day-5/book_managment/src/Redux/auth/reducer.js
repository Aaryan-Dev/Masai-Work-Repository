import * as types from "./actionTypes";

const initialState = {
  isAuth: false,
  token: "",
  isAuthLoading: false,
  isAuthError: false,
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...oldState,
        isAuthLoading: true,
      };

    case types.USER_LOGIN_SUCCSESS:
      return {
        ...oldState,
        token: payload,
        isAuth: true,
      };

    case types.USER_LOGIN_FAILURE:
      return {
        ...oldState,
        token: "",
        isAuthError: true,
      };

    default:
      return oldState;
  }
};

export { reducer };
