import { Routes, Route } from "react-router-dom";
import Users from "../Components/Users";
import UserDetails from "../Components/UserDetails";
import Login from "../Components/Login";
import Private from "../Context/privateRoute";

function Routers() {

    return (
<>

        <Routes>
            <Route path="/" element={<h2> Home </h2> } />
            <Route path="/login" element={<Login/> } />
            <Route path="/contact" element={<h2> Contact </h2> } />
            <Route path="/about" element={<h2> About </h2> } />
            <Route path="/users" element={<Private> <Users/> </Private> } />
            <Route path="/users/:id" element={<Private> <UserDetails/> </Private>  } />
        </Routes>
</>

    );

}

export default  Routers;
