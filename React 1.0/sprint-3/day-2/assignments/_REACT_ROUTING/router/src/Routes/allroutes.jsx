import { Routes, Route } from "react-router-dom";
import Home from "../Components/home"
import AllProducts from "../Components/products"
import ProductsDetails from "../Components/productsDetails"

function Routers() {
    return (
  
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<AllProducts/>} />
            <Route path="/products/:id" element={<ProductsDetails/>} />
        </Routes>
);
}
    
export default Routers;


