import { AuthContext } from "../Context/AuthContext";
import { useContext, useEffect, useState } from "react";
import Pagination from "../Components/Pagination";
import RestaurantTable from "../Components/RestaurantTable";

const getData = async (page = 1) => {
  let res = await fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10`
  );
  let data = await res.json();
  return data;
};

function Dashboard() {
  const { logoutUser, token } = useContext(AuthContext);

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    getData(page).then((res) => {
      setData(res.data);
      setTotal(res.totalPages);
    });
  }, [page]);
  const handlePage = (i) => {
    setPage(i);
  };
  console.log(token);
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button onClick={logoutUser} data-testid="logout-btn">
          Logout
        </button>
        <p>
          Token:
          <b data-testid="user-token">{token.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
        <RestaurantTable data={data} />
      </div>
      <div data-testid="pagination-container">
        <Pagination
          totalPages={total}
          currentPage={page}
          handlePageChange={handlePage}
        />
      </div>
    </div>
  );
}

export default Dashboard;
