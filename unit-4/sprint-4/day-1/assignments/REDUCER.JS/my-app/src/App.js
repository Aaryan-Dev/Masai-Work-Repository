import "./App.css";
import Counter from "./components/counter";

// create a reducer function
// it should accept a state and an action
// it should work for the following action types INCREMENT_AMOUNT and DECREMENT_AMOUNT
// each action should have { type, payload } type is the action type above, the payload is a number
// in the reducer function, write a switch case, and use action.type to determine how to update the state
// the function reducer should return a new state based on the action
// the reducer( { amount: 0 } , { type: "INCREMENT_AMOUNT", amount: 1000 }) should return { amount: 1000 }
// the reducer( { amount: 500 } , { type: "INCREMENT_AMOUNT", amount: 2000 }) should return { amount: 2500 }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
