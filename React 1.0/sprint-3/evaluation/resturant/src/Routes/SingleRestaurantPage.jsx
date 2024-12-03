import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const getData = (id) =>
  fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`
  ).then((res) => {
    return res.json();
  });

function SingleRestaurantPage() {
  const params = useParams().id;
  const [data, setdata] = useState({});

  useEffect(() => {
    getData(params)
      .then((res) => setdata(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [params]);

  console.log(data);

  return (
    <div data-testid="restaurant-container">
      <div>
        <h3 data-testid="restaurant-name">{data.name}</h3>
      </div>
      <div data-testid="restaurant-type">Type:{data.type}</div>
      <div data-testid="restaurant-rating">Rating:{data.rating}</div>
      <div data-testid="restaurant-votes">Votes:{data.number_of_votes}</div>
      <div data-testid="restaurant-price">
        Starting Price:{data.price_starts_from}
      </div>
      <div>
        <img
          src={data.image}
          alt="food"
          data-testid="restaurant-image"
          width={"100px"}
        />
      </div>
    </div>
  );
}
export default SingleRestaurantPage;
