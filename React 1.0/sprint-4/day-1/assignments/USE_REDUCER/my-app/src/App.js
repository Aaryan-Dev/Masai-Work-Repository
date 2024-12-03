import "./App.css";

// use the previous reducer and integrate it with your react app
// useReducer(reducer, { amount: 0 } )
// a user should be able to type in an input box, and increment and decrement the amount
// there should be two input boxes and two buttons for this, one for adding, and the other for reducing
// use the dispatcher that useReducer provides

import UseReduce from "./components/useReducer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UseReduce />
      </header>
    </div>
  );
}

export default App;
