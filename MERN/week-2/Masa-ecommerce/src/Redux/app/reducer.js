import * as types from "./actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isError: true,
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_BOOKS_REQUEST:
      return {
        ...oldState,
        isError: false,
        isLoading: true,
        products: [],
      };
    case types.GET_BOOKS_SUCCSESS:
      return {
        ...oldState,
        isError: false,
        isLoading: false,
        products: payload,
      };
    case types.GET_BOOKS_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        products: [],
      };

    default:
      return oldState;
  }
};

export { reducer };
