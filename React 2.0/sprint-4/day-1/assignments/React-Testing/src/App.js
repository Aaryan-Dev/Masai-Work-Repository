import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="App">
      <h3>Current Theme is {theme}</h3>
      <Button
        colorScheme="green"
        variant={"bordered"}
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Click me
      </Button>
    </div>
  );
}

export default App;
