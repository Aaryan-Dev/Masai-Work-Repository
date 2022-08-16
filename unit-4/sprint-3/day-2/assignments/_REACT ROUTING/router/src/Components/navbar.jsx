import { Link, NavLink } from "react-router-dom";


function Navbar() {
    

    return (
        <div>
        <NavLink to="/"   style={isActive => ({
    color: isActive ? "green" : "blue"
  })}> Home </NavLink>
            
            <NavLink to="/products"
    //             style={isActive => ({
    // color: isActive ? "bl" : "blue"
    //             })}
            >All Products </NavLink>
        </div>

    )
}

export default Navbar;
        
        




