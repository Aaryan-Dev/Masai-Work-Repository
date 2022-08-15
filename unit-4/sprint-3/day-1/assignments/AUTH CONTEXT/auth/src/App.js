import "./App.css";
import Login from "./component/login";
import Signup from "./component/signup";

import { useContext } from "react";
import { Authcontext } from "./context/authcontext";
import { Button } from "./component/button";
//    Create a context by the name AuthContext

// create a AuthContextProvider component which will wrap the entire application around it
// create a isAuth and a toggleAuth function
// pass these values into your context provider
// create a navbar with a button to login or logout (change with the isAuth variable)
// use the reqres.in api for login to achieve this task
// create another component which will display the login status of the user along with the token
// these two components should not share props and the app state should be accessed through the context api

function App() {
  const value = useContext(Authcontext);

  const { log } = value;
  return (
    <div className="App">
      <header className="App-header">
        {/* based on is Auth */}
        <Button />
        or 👇
        {log === true ? <Login /> : <Signup />}
      </header>
    </div>
  );
}

export default App;
