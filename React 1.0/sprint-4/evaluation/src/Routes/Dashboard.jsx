import { useEffect, useState } from "react";
import Pagination from "../Components/Pagination";
import List from "../Components/List";

import { useContext } from "react";
import { Con } from "../Context/AppContext";

import { useSearchParams } from "react-router-dom";

import axios from "axios";

function Dashboard() {
  // statemanegment**********************************
  const [page, setpage] = useState(1);
  const [totalpage, settotalpages] = useState();
  const [data, setdata] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  // statemanegment**********************************

  const value = useContext(Con);

  const { isAuth, token, LOGIN_REQUEST, logoutUser } = value;
  console.log(token);

  // *********** axios ****************************************
  const haveData = (page) => {
    setLoading(true);
    setError(false);
    axios
      .get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10`
      )
      .then(
        (res) => (
          setLoading(false),
          setError(false),
          console.log(res.data.data),
          setdata(res.data.data),
          settotalpages(res.data.totalPages)
        )
      )
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };
  // *********** axios ***************************************

  useEffect(() => {
    haveData(page);
  }, [page]);

  useEffect(() => {
    setSearchParams({ page });
  }, [page]);

  console.log(data);
  console.log(totalpage);
  console.log(page);

  const handlePage = (e) => {
    setpage(Number(e.target.innerText));
  };

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h3>Dashboard</h3>
      <hr />
      <div>
        <button onClick={logoutUser}>Logout</button>
        <br />
        <br />
        <Pagination
          totalPages={totalpage}
          currentPage={page}
          handlePageChange={handlePage}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
        <List data={data} load={isLoading} error={isError} />
      </div>
      <div></div>
    </div>
  );
}

export default Dashboard;
