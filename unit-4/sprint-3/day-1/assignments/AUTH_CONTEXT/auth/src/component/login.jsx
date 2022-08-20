import { useState } from "react"
import { useContext } from "react";
import {Authcontext} from "../context/authcontext"

const initial = {
    email : "",
    password : ""
}

const Login = () => {
    const [data, setData] = useState(initial);
    const value = useContext(Authcontext);

    const { log, isAuth, toggleAuth } = value;

    const handleChange = (e) => {

        // console.log(e.target)
        const { name, value } = e.target

        // console.log(data)
        setData( {...data, [name]: value}  )
        // console.log(data)
        
    }

    const keep = (event) => (
        console.log(data),
        event.preventDefault(),
        isAuth(data)

    )    


    return (
        <>
            <h4>Log In</h4>

            <form onSubmit={keep}>
             <input value={data.email}  name="email" onChange={handleChange} type="email" placeholder="username" />
            <br />
            <input value={data.password} name = "password" onChange={handleChange} type="password" placeholder="password" />
            <input  type="submit" value="submit" />    

            </form>


        </>
  )

}

export default Login;