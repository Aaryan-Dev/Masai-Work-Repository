
import React from "react";
import { useState } from "react";

const AuthCon = React.createContext();

const Prov = (prop) => {

    const [Auth, setAuth] = useState(true);

    const toggleAuth = () => {
        setAuth(!Auth);
    }
     


    return ( 
<>
<AuthCon.Provider value = {{Auth, toggleAuth}}>
  {prop.children}
</AuthCon.Provider>
</>
);
}
export { AuthCon, Prov };








