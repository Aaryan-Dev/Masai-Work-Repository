import React from "react";
import { useEffect, useState, useRef } from "react";
import { getProducts } from "./api";
import Pagination from "./Pagination";
import ProductList from "./ProductList";


function ProductPage() {

  const [data, setData] = useState([]);
  const [repage, setpage] = useState(0);
  // console.log(getProducts);   
  const [pa, setPa] = useState(1); 

  const [sort, setSort] = useState("asc"); 
  const [no, setNo] = useState(5);



  useEffect(() => {
    
    getProducts(pa, sort, no).then((res) => {
      console.log(res);
      setData(res.data);
      setpage(res.totalPages);
    }).catch((err) => {
      console.log(err);
    })

  },[pa, sort, no] )

  const asend = () => {
    setSort("asc")
  };
  
  const desend = () => {
    setSort("desc")
  };
    
  const inc = () => {
    
    let hell = document.querySelector("#what").value;
    console.log(hell);

    if (hell==5) {
      setNo(5);
      
    } else if (hell==10) {
      setNo(10);
    }
    
  };
    

  return (
    <div>
      <h1 data-testid="product-page-title">Product Page</h1>
      <button disabled={sort=="asc"} data-testid="low-to-high" onClick={asend}  >Sort low to high</button>
      <button disabled={sort=="desc"} data-testid="high-to-low" onClick={desend}   >Sort high to low</button>
      <div>
        <label>Per page</label>
        <select  data-testid="limit-select" id="what" onChange={inc}>

          <option  value="5">5</option>
          <option value="10">10</option>

        </select>
      </div>
      <Pagination current = {pa} total = {repage} setPa = {setPa} />
      {/* map products */}
      <ProductList
        thedata={data}
        total = {repage}
      />
    </div>
  );
}

export default ProductPage;
