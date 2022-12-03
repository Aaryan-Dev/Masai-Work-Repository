import * as types from "./actionTypes";
import axios from "axios";

const getBooks = (url, getBookParams) => (dispatch) => {
  dispatch({ type: types.GET_BOOKS_REQUEST });

  return axios
    .get(url, getBookParams)
    .then((res) => {
      dispatch({ type: types.GET_BOOKS_SUCCSESS, payload: res.data });
      // console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: types.GET_BOOKS_FAILURE, payload: err });
    });
};

export { getBooks };
