//Create the HOC for protected Routes
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ReqAuth = ({ childern }) => {
  const token = useSelector((data) => data.AuthReducer.token);
  const isAuth = useSelector((data) => data.AuthReducer.isAuth);

  const location = useLocation();

  if (isAuth === false) {
    return <Navigate to="/login" replace state={{ data: location.pathname }} />;
  }

  return childern;
  //   console.log(isAuth);
  //   console.log("aldf");
  //   console.log(token);
};

export default ReqAuth;
