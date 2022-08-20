import "./App.css";
import Navbar from "./Components/Links";
import Router from "./Pages/allroutes";

//    PRIVATE ROUTES
// Create the following pages:
// a home page with a welcome component
// a login page with a login component
// a dashboard page with a dashboard component that says Welcome to Dashboard
// a settings page which says Settings

// keep. pages in Pages folder
// keep all routes inside a Routes file inside Pages
// keep components in Components folder

// A user cannot enter the dashboard page unless they are logged in
// create a component PrivateRoutes, and keep the dashboard routes, and Settings component in that

// the Private Routes should be kept in a route that matches /dashboard
// use useNavigation , and navigate the user back to the login page if the user tries to access the dashboard pages
// Routes:

// Home - /

// Login - /login

// PrivateRoutes - /dashboard

// Dashboard - /dashboard
// Settings - /dashboard/settings
// use Context Provider to manage the auth state

// Deploy the application and submit the deployed link

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Router />
      </header>
    </div>
  );
}

export default App;
