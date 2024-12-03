import store from "./store";

const initialState = {
  count: 10,
  todos: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      return {
        ...state,
        count: state.count + payload,
      };
    case "SUB":
      return {
        ...state,
        count: state.count - payload,
      };

    case "request":
      return {
        ...state,
        isLoading: true,
      };

    case "sucsess":
      return {
        ...state,
        isLoading: false,
        todos: payload,
      };

    case "failure":
      return {
        ...state,
        todos: [],
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default reducer;
