//Create ActionCreator functions here
import * as types from "./actionTypes";
import axios from "axios";

export const getShoes = () => (dispatch) => {
  dispatch({ type: types.GET_SHOES_DATA_REQUEST });

  axios
    .get("http://localhost:8080/shoes")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: types.GET_SHOES_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_SHOES_DATA_FAILURE });
    });
};
