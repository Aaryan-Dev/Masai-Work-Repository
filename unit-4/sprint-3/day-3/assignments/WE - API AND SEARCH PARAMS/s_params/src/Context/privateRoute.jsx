import { Navigate } from "react-router-dom";
import { useContext } from "react";
import {AuthCon} from "./Auth"
 
function Private(props) {
    
    const { Auth } = useContext(AuthCon);

    if (!Auth) {
        return <Navigate to="/"/>
    }

    return props.children;

}

export default Private;