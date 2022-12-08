import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const getData = async (id) => {
  let res = await fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`
  );
  let data = await res.json();
  return data.data;
};

function SingleRestaurantPage() {
  const { id } = useParams();
  
  const [ data, setData ] = useState({});
  console.log(id);
  useEffect(()=>{
    getData(id).then(res => setData(res));
  }, [id]);
  return (
    <div data-testid="restaurant-container">
      <div>
        <h3 data-testid="restaurant-name">{data.name}</h3>
      </div>
      <div data-testid="restaurant-type">Type: {data.type}</div>
      <div data-testid="restaurant-rating">Rating: {data.rating}</div>
      <div data-testid="restaurant-votes">Votes: {data.number_of_votes}</div>
      <div data-testid="restaurant-price">Starting Price: {data.price_starts_from}</div>
      <div>
        <img data-testid="restaurant-image" src={data.image} width={"100px"} />
      </div>
    </div>
  );
}
export default SingleRestaurantPage;
