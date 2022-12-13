import { useContext } from "react";
import { Con } from "../Context/AppContext";
import { Navigate } from "react-router-dom";

function PrivateRoute(props) {
  const value = useContext(Con);

  const { isAuth } = value;
  console.log(isAuth);

  if (isAuth === false) {
    return <Navigate to="/" />;
  }

  return props.children;
}

export default PrivateRoute;
