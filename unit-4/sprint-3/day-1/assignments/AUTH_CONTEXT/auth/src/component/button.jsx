import { useContext } from "react";
import { Authcontext } from "../context/authcontext";



function Button () {
    
    const value = useContext(Authcontext);

    const { log, isAuth, toggleAuth } = value; 
    console.log(log)

    return <button onClick={toggleAuth} > {log===true?"Sign Up":"Log In"}  </button>

}

export { Button };
