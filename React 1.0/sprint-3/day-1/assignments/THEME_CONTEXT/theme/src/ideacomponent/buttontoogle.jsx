import { useContext } from "react";
import { AppContext } from "../components/context";

function Button() {
    const value = useContext(AppContext);
    const { theme , toggle } = value;
    
    function look(theme){
        if (theme=="dark") {
            return (
                {
                    color: "white",
                        background : "black"
                }
                )
            } else {
            return (
                {
                    color: "black",
                        background : "white"
                }
                )
        }
   } 

    return <button style={look(theme)} onClick={toggle} >{ theme=="dark"?"Light":"Dark" }</button>


} 

export {Button};