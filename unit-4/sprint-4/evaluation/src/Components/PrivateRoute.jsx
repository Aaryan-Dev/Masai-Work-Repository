import { useContext } from "react";
import { Con } from "../Context/AppContext";
import { Navigate } from "react-router-dom";

function PrivateRoute(props) {
  const value = useContext(Con);

  const { isAuth, token, loginUser, logoutUser } = value;
  console.log(isAuth);

  if (isAuth === false) {
    return <Navigate to="/" />;
  }

  return props.children;
}

export default PrivateRoute;
