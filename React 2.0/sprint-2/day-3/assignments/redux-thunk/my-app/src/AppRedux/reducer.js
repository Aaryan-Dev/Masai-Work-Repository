import { getAuth, getData, setData } from "../utils/appLocalstorage";
import store from "../store";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
  isAuth: getAuth() == "QpwL5tke4Pnpja7X4" || false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
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

    case "done":
      return {
        ...state,
        isAuth: true,
      };

    case "notdone":
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};

export default reducer;
