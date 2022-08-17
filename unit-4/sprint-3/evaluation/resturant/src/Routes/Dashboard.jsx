import { useEffect, useState } from "react";
import Pagination from "../Components/Pagination";
import RestaurantTable from "../Components/RestaurantTable";

import { useContext } from "react";
import { Con } from "../Context/AppContext";

const getData = (page) =>
  fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10`
  ).then((res) => {
    return res.json();
  });

function Dashboard() {
  const [page, setpage] = useState(1);

  const [totalpage, settotalpages] = useState();

  const [data, setdata] = useState([]);

  const value = useContext(Con);

  const { isAuth, token, loginUser, logoutUser } = value;
  console.log(token);

  useEffect(() => {
    getData(page)
      .then(
        (res) => (
          console.log(res), setdata(res.data), settotalpages(res.totalPages)
        )
      )
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  console.log(data);
  console.log(totalpage);
  console.log(page);

  const handlePage = (e) => {
    // console.log(e.target.innerText);
    setpage(Number(e.target.innerText));
  };

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button onClick={logoutUser} data-testid="logout-btn">
          Logout
        </button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
        <RestaurantTable data={data} />
      </div>
      <div data-testid="pagination-container">
        <Pagination
          totalPages={totalpage}
          currentPage={page}
          handlePageChange={handlePage}
        />
      </div>
    </div>
  );
}

export default Dashboard;
