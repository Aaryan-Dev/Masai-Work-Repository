import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>{process.env.REACT_APP_NOT_CLASSIFIED_INFO_OR_WHATEVER}</h3>
        <li>and</li>
        <h3>{process.env.REACT_APP_ANY_URL_OR_API}</h3>
        <u>Any change will be rendered only at the time of deployment 👆</u>
      </header>
    </div>
  );
}

export default App;
