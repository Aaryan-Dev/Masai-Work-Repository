import "./App.css";
import Navbar from "./Components/Navbar";
import RequireAuth from "./Components/RequireAuth";
import Books from "./Pages/Books";
import MainRoutes from "./Pages/MainRoutes";

function App() {
  return (
    <div className="App">
      <MainRoutes />
      {/* <RequireAuth /> */}
      {/* <Navbar /> */}
      {/* <Books /> */}
    </div>
  );
}

export default App;
