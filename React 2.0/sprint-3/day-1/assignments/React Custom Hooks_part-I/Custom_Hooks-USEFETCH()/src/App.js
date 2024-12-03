import useTimeout from "./Hooks/useTimeout";

import "./App.css";
import TestComponent from "./Components/testComponent";
import useFetch from "./Hooks/useFetch";

function App() {
  // const showText = useTimeout(1000);

  const { data, loading, error } = useFetch();

  console.log(data);

  return (
    <div className="App">
      {/* {!showText ? "Loading..." : "data"} */}

      {data.map((el) => (
        <li>{el.login}</li>
      ))}

      <div>{/* <TestComponent /> */}</div>
    </div>
  );
}

export default App;
