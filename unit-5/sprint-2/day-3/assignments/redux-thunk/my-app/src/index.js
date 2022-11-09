import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import store from "./store";

// use redux to create a store and write in the following files
// action.js ( action object creators )
// reducer.js ( reducer function )
// store.js ( store )
// Create these components
// Counter.jsx
// CounterValue.jsx ( contains the counter value, retrieve it from store ).
// CounterButtons.jsx ( dispatch the actions for incrementing and decrementing counter value )
// Create a forceUpdate function, that will help us in re-rendering the React component, to show the updated counter value for the Redux store
// attach the forceUpdate to the store.subscribe method
// const [state, setState ] = useState(0);
// const forceUpdate = ( ) => setState(prev=>prev+1)
// on clicking the add and reduce the values should be updated in the counter

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
