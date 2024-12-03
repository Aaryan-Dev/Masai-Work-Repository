import React, { useState } from "react";

export const AuthContext = React.createContext(null);

function AuthContextProvider({children}) {
    const [isAuth, setAuth] = React.useState(false);
    const [token, setToken] = React.useState(null);

    const loginUser = ()=>{
        setAuth(true);
    }
    const logoutUser = ()=>{
        setAuth(false);
        setToken(null);
    }
    const tokenSetter = (tok)=>{
        setToken(tok);
    }
    return(
        <AuthContext.Provider  value={ {isAuth, token, loginUser, logoutUser, tokenSetter} }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
