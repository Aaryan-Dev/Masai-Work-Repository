import { Link } from "react-router-dom";

export function RestaurantCard({ id, name, rating, type, votes, start }) {
  return (
    <tr data-testid="item">
      <td data-testid="name">
        <Link to={`/restaurants/${id}`}>{name}</Link>
      </td>
      <td data-testid="rating">{rating}</td>
      <td data-testid="type">{type}</td>
      <td data-testid="votes">{votes}</td>
      <td data-testid="price">{start}</td>
    </tr>
  );
}

// <tr>
//   <td>
//
//   </td>
//   <td></td>
//   <td>{item.type}</td>
//   <td>{item.number_of_votes}</td>
//   <td>{item.price_starts_from}</td>
// </tr>;
