//Create the HOC for protected Routes
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  // const  = prop;

  const token = useSelector((state) => state.AuthReducer.token);
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  const location = useLocation();

  console.log(location);

  if (isAuth === false) {
    return <Navigate to="/login" replace state={{ data: location.pathname }} />;
  }

  return children;
  // return <h2>Why?</h2>;
};

export default RequireAuth;
