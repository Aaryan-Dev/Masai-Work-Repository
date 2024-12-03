export const getData = () => {
  try {
    let val = JSON.parse(localStorage.getItem("value"));
    return val;
  } catch (e) {
    return undefined;
  }
};

export const setData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
// *************************************************************************

export const getAuth = () => {
  try {
    let auther = JSON.parse(localStorage.getItem("auth"));
    return auther;
  } catch (e) {
    return undefined;
  }
};

export const saveSuth = (token) => {
  localStorage.setItem("auth", JSON.stringify(token));
};
