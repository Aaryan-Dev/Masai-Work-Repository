// import axios from "axios";
// import { useEffect, useState } from "react";

// const useFetch = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const fetchData = () => {
//     setLoading(true);

//     axios
//       .get("http://api.github.com/users?q=Masai")
//       .then((res) => {
//         setData(res.data), setLoading(false), setError(false);
//       })
//       .catch((err) => {
//         setData([]), setLoading(false), setError(true);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return { data, loading, error };
// };

// export default useFetch;
