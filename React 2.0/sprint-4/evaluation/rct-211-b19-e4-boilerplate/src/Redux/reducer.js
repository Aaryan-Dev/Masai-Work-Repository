import * as types from "./actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return {
        products: [],
        isLoading: true,
        isError: false,
      };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        products: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_PRODUCTS_FAILURE:
      return {
        products: [],
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
