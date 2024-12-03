import { RestaurantCard } from "./RestaurantCard";

function RestaurantTable({ data = [] }) {
  console.log(data);
  return (
    <table border="1px">
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Type</th>
          <th>Number of Votes</th>
          <th>Price Starts From</th>
        </tr>
      </thead>
      <tbody>
        {/* map through the data */}
        {data?.map((item) => {
          return (
            <RestaurantCard
              key={item.id}
              name={item.name}
              price_starts_from={item.price_starts_from}
              number_of_votes={item.number_of_votes}
              type={item.type}
              rating={item.rating}
              id={item.id}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default RestaurantTable;
