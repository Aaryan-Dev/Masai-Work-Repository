import * as types from "./actionTypes";

const initialState = {
  books: [],
  isLoading: false,
  isError: true,
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_BOOKS_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.GET_BOOKS_SUCCSESS:
      return {
        ...oldState,
        books: payload,
      };
    case types.GET_BOOKS_FAILURE:
      return {
        ...oldState,
        isError: true,
        books: [],
      };

    default:
      return oldState;
  }
};

export { reducer };
