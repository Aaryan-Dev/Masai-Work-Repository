import logo from "./logo.svg";
import "./App.css";
import { useContext } from "react";

import { AppContext } from "./components/context";
import { Button } from "./ideacomponent/buttontoogle";

function App() {
  const val = useContext(AppContext);
  console.log(val);

  const { theme } = val;

  return (
    <div className="App">
      <header className={theme == "light" ? "App-header-white" : "App-header"}>
        <div
          style={
            theme == "light"
              ? {
                  color: "white",
                  backgroundcolor: "black",
                  padding: "5px",
                  border: "2px solid black",
                }
              : {
                  color: "black",
                  padding: "5px",
                  backgroundcolor: "white",
                  border: "2px solid white",
                }
          }
        >
          Learn React
        </div>

        <Button />
      </header>
    </div>
  );
}

export default App;
