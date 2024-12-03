// login component
import { useContext } from "react";
import {Cont} from "../Context/contextProvider"

function Login() {

    const value = useContext(Cont);
    console.log(value);
    const { Auth, isAuth } = value;

 return (
<>
         <h2>Login</h2 >
         <button onClick={isAuth} >{ Auth===true?"Log Out":"Log In"}</button>
</>

    );

}

export default Login;