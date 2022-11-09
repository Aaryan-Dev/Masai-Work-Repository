import useTimeout from "./Hooks/useTimeout";

import "./App.css";
import TestComponent from "./Components/testComponent";
import useFetch from "./Hooks/useFetch";
import { useEffect, useState } from "react";

function App() {
  const showText = useTimeout(1000);
  // const { data, loading, error } = useFetch();
  // console.log(data);

  // ****************** debouncing ************************
  // const [scrollNum, setScrollNum] = useState(0);

  // function debouncer(callback, delay) {
  //   let debounce;

  //   return function () {
  //     debounce && clearTimeout(debounce);
  //     debounce = setTimeout(function () {
  //       callback();
  //     }, delay);
  //   };
  // }
  // ****************** debouncing ************************
  // XXXXXXXXXXXXXXXXXXXXXXXXXX
  // ****************** throttling *******************************
  // function throttle(callback, delay) {
  //   let lastCall = 0;

  //   return function () {
  //     if (Date.now() - lastCall > delay) {
  //       lastCall = Date.now();
  //       callback();
  //     }
  //   };
  // }
  // ****************** throttling *******************************

  // ****************** for debouncing ************************
  // useEffect(() => {
  //   window.addEventListener(
  //     "scroll",
  //     debouncer(() => {
  //       setScrollNum((prev) => prev + 0.5);
  //     }, 1000)
  //   );

  //   return () => {
  //     window.removeEventListener(
  //       "scroll",
  //       debouncer(() => {
  //         setScrollNum((prev) => prev + 0.5);
  //       }, 1000)
  //     );
  //   };
  // }, []);
  // ****************** for debouncing ************************

  // ****************** for throttling ************************
  // useEffect(() => {
  //   window.addEventListener(
  //     "scroll",
  //     throttle(() => {
  //       setScrollNum((prev) => prev + 1);
  //     }, 1000)
  //   );

  //   return () => {
  //     window.removeEventListener(
  //       "scroll",
  //       throttle(() => {
  //         setScrollNum((prev) => prev + 1);
  //       }, 1000)
  //     );
  //   };
  // }, []);

  // ****************** for throttling ************************

  return (
    <div className="App">
      {!showText ? "Loading..." : "data"}
      <div>
        <TestComponent />
      </div>

      {/* {data.map((el) => (
        <li>{el.login}</li>
      ))} */}
      <div style={{ position: "sticky", top: "100px" }}>
        <h3> scrollCount : {scrollNum} </h3>
      </div>
    </div>
  );
}

export default App;
