import { useContext } from "react";
import { Cont } from "../Context/contextProvider"
import { Navigate } from "react-router-dom"

function Private({children}) {
    
    const {Auth} = useContext(Cont);

    console.log(Auth+"*");
    
    if (Auth===false) {
       return <Navigate to="/" />
    }
        return children;
}

export default Private;


