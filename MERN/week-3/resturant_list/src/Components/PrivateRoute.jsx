import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const { isAuth } = useContext(AuthContext);
    console.log("private, isAuth:", isAuth);
    if(!isAuth){
        return <Navigate to={"/login"} />
    }
    else{
        return children
    }
}

export default PrivateRoute;
