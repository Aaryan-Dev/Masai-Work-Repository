import { Link } from "react-router-dom";

// Home - /
// Login - /login
// PrivateRoutes - /dashboard
// Dashboard - /dashboard
// Settings - /dashboard/settings
// use Context Provider to manage the auth state


function Navbar() {
    return (
<div>
<Link to="/" >Home | </Link>
<Link to="/login" >Login | </Link>
<Link to="/dashboard" >Dashboard | </Link>
<Link to="/dashboard/settings" >Settings</Link>

</div>
    );

}

export default Navbar;
