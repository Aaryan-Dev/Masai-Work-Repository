import * as types from "./actionTypes";

const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        token: payload,
        isLoading: false,
        isAuth: true,
      };

    case types.LOGIN_FAILURE:
      return {
        ...state,
        isError: true,
      };

    default:
      return state;
  }
};
