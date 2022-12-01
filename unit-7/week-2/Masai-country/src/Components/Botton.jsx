import { useContext } from "react";
import { AppContext } from "./context";
function Button() {
  const value = useContext(AppContext);
  const { theme, toggle } = value;

  function look(theme) {
    if (theme === "dark") {
      return {
        border: "1px solid black",
        padding: "10px",
        color: "black",
        background: "white",
      };
    } else {
      return {
        border: "1px solid black",
        padding: "10px",
        color: "white",
        background: "black",
      };
    }
  }

  return (
    <button style={look(theme)} onClick={toggle}>
      {theme === "dark" ? "Light Theme" : "Dark Theme"}
    </button>
  );
}

export { Button };
