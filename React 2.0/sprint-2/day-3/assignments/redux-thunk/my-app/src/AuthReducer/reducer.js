import { getData, setData } from "../utils/appLocalstorage";

const initialState = {
  count: getData() || 10,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      let tempData = state.count + payload;
      setData("value", tempData);
      return {
        ...state,
        count: state.count + payload,
      };

    case "SUB":
      let sempData = state.count - payload;
      setData("value", sempData);
      return {
        ...state,
        count: state.count - payload,
      };

    default:
      return state;
  }
};

export default reducer;
