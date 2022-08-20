import { Link } from "react-router-dom";



function Navbar() {
    
    return (
<div>
<Link to="/" >Home | </Link>
<Link to="/login" >Login | </Link>
<Link to="/contact" >Contact | </Link>
<Link to="/about" >About | </Link>
<Link to="/users" >Users</Link>

</div>
    );

}

export { Navbar };