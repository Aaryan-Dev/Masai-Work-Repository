import "./App.css";
import Navbar from "./Components/Navbar";
import Products from "./Pages/Products";
import MainRoutes from "./Pages/MainRoutes";
import { ProductPage } from "./Components/ProductPage";
import FilterComp from "./Components/FilterComp";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <FilterComp /> */}

      <Link to="/">Products</Link>

      <Link to="/cart">Cart</Link>
      <Link to="/orders">Orders</Link>

      <MainRoutes />
      {/* <ProductPage /> */}
      {/* <Products /> */}
      {/* <RequireAuth /> */}
      {/* <Navbar /> */}
      {/* <Books /> */}
    </div>
  );
}

export default App;
