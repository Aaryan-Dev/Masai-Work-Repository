import React from "react";
import { useState } from "react";

const Cont = React.createContext();

function Provide(props) {
    
    const [Auth, setAuth] = useState(false);
    
    const isAuth = () => (
        setAuth(Auth===true?false:true)
        );

    
    console.log(props);
    return (
    <Cont.Provider value = { {Auth, isAuth} }>
          {props.children}
    </Cont.Provider>
);
}






export {Cont , Provide} ;
