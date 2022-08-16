import { useContext } from "react";
import {AuthCon} from "../Context/Auth"

function Login() {
    
    const value = useContext(AuthCon);

    const { Auth, toggleAuth } = value;

    return (

        <button onClick={toggleAuth}> {Auth==true?"LOG OUT":"LOG IN"} </button>

    );
}


export default Login;