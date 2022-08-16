import { useEffect , useState} from "react";
import { Link, useParams } from "react-router-dom";

const pdata = (id) => (

  fetch(`http://localhost:3000/users/${id}`).then((res) => {
    return res.json();
  })

);

function ProductsDetails() {
    
  const params = useParams();
  // console.log(params);
  const [data, setData] = useState({});

  useEffect(() => {
    pdata(params.id).then((res) => {
      // console.log(res);
      setData(res);
    }).catch((err) => {
      console.log(err);
    })
      
    console.log(data+"***");
    
  }, [params.id])


    return (
      <>
        
          <h3>Products Details</h3>
        <table border="1px" >

          <thead>
            
            <th>Name</th>
            <th>Price</th>
            <th>More Details</th>

          </thead>
          
          <tbody>
            
            <td>{data.name}</td>
            <td>{data.price}</td>
            <td>{`Id-${data.id}`}</td>

            </tbody>

            </table>

        </>
    )

}

export default ProductsDetails; 