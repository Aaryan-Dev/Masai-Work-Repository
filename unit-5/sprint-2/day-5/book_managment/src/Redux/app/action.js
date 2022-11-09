import * as types from "./actionTypes";
import axios from "axios";

const getBooks = (getBookParams) => (dispatch) => {
  dispatch({ type: types.GET_BOOKS_REQUEST });

  return axios
    .get("http://localhost:8080/books", getBookParams)
    .then((res) => {
      dispatch({ type: types.GET_BOOKS_SUCCSESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_BOOKS_FAILURE, payload: err });
    });
};

export { getBooks };
