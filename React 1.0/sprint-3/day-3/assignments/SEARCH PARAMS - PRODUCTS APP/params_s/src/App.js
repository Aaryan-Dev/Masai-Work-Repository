import "./App.css";
import { Navbar } from "./Components/Links";
import Routers from "./Router/allRoutes";

// update your application from class and add /users and /users/:id pages
// retrieve id from url and make api requests in the /users/:id page
// use reqres.in/api/users and apply pagination there ( use ?page=1)
// make it similar to how we have done in class
// use the hook useSearchParams from react-router-dom
// apply pagination and keep the URL in sync whenever the page number changes
// read from the url such that when you are able to refresh the page it goes to the same page ( keep auth true by default )

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routers />
      </header>
    </div>
  );
}

export default App;
