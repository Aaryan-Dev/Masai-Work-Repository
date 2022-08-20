import { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";
 
const getProducts = () => (
  fetch("http://localhost:3000/users").then((res) => {
    return res.json();
  })
  )  

function AllProducts() {

  const [data, setData] = useState([]);

  useEffect(() => {
  
    getProducts().then((res) => {
      setData(res);
    }).catch((err) => {
      console.log(err);
    })
    
  }, []);
  
  console.log(data);

    return (
      <div>
          <h3>Products</h3>
        
        {data.map((el) => (
          
          <div>
          <Link to={`/products/${el.id}`} >
            {el.name}
          </Link>

          </div>

        ))}


        </div>
    )

}

export default AllProducts; 