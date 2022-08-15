import React from "react";
import { useState } from "react";

const Authcontext = React.createContext();

function AuthContextProvider(props) {

    const [log, setLog ] = useState(true);
    
    const [status, setStatus] = useState("");

    const isAuth = (data) => {

        if (log==true) {
        // log in the user
            console.log("signedUp");
            let body1 = JSON.stringify(data);
            console.log(body1)
            
            fetch("https://reqres.in/api/login", {
                method : "POST",
                body: body1,
                headers: { "Content-Type": "application/json" }
            
            }).then((res) => {
                return res.json();
            }).then((res) => {
                console.log(typeof(res.token));
          
                if (typeof(res.token)==="string") {
                     setStatus(`You are logged in with token - ${res.token}`)
                    setLog(true);
                } else {
                    setStatus(`You are not logged in, try again or signUp`);

                    setInterval(() => {
                           setLog(false)
                    }, 2000)

                 }

            }).catch((err) => {
                // console.log(err);
            })
                
            
        } else if(log===false) {
            // signup the user
            console.log("not signedUp");
            let body2 = JSON.stringify(data);
            console.log(body2)
            
            fetch("https://reqres.in/api/register", {
                method : "POST",
                body: body2,
               headers: { "Content-Type": "application/json" }
            }).then((res) => {
                return res.json();

                

            }).then((res) => {
                console.log(res);

                     if (typeof(res.token)==="string") {
                         setStatus(`You are signed up in with token - ${res.token} & id - ${res.id}`)
                         setLog(true)
                      } else {
                      setStatus(`try again with different username`);
                         setLog(false);
                 }

            }).catch((err) => {
                // console.log(err);
            })
            
        }
            

        
    }
    

    const toggleAuth = () => {
        setLog(log == true?false:true) 
    }

    


    console.log(props);
    return (
        <>
        {status}
        <Authcontext.Provider value={{log, isAuth, toggleAuth }}>
            {props.children}
</Authcontext.Provider>
        </>
)
}

export { Authcontext, AuthContextProvider };
