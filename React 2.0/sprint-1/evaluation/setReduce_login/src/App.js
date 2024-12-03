import { useReducer, useState } from "react";
import "./App.css";
import { initialState } from "./initialState";
import axios from "axios";
import { EMAIL, LOGIN_SUCCESS } from "./actionTypes";
import { reducer } from "./reducer";

function App() {
  //use the useReducer function here; import the reducer function and initial state variable here.
  const [reducerState, dispatch] = useReducer(reducer, { initialState });

  const handle = (event) => {
    const { value, name } = event.target;

    setForm({ ...form, [name]: value });
  };

  const take = (event) => {
    event.preventDefault();
    login(form);
  };

  const login = (form) => {
    let obj = {
      email: form.email,
      password: form.password,
    };

    let value = "";
    // ************************************ axios ****************
    axios
      .post("https://reqres.in/api/login", obj)
      .then((res) => {
        console.log(reducerState);
        setToken(res.data.token);
        setAuth(true);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
        dispatch({ type: "auth", payload: res.data.token });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // ************************************ axios ****************

  // *
  const [form, setForm] = useState(initialState);
  const [token, setToken] = useState("");
  const [auth, setAuth] = useState(false);
  return (
    <div className="main-app">
      <div className="login-wrapper">
        <div style={{ textAlign: "center" }}>
          <h1>LOGIN</h1>
          <div className="welcome-text">
            Welcome to the RCT-211 E1 Evaluation
          </div>
          {/* if the user is authenticated as per the reducerState, THEN ONLY show div with the token data, OTHERWISE show the Incorrect Credentials div */}

          {auth && <div data-cy="token">Token:{token}</div>}
          {!auth && (
            <div data-cy="incorrect-credentials" style={{ color: "red" }}>
              Incorrect Credentials
            </div>
          )}
        </div>

        {/* *********************************8** */}
        <form onSubmit={take}>
          <div className="email-wrapper">
            <label>Email</label>
            <input
              onChange={handle}
              name="email"
              value={form.email}
              data-cy="email"
            />
          </div>
          <div className="password-wrapper">
            <label>Password</label>
            <input
              onChange={handle}
              name="password"
              value={form.password}
              data-cy="password"
            />
          </div>
          <div className="submit-button-wrapper">
            <button data-cy="submit-button" type="submit">
              LOGIN
            </button>
          </div>
        </form>
        {/* ************************************************************** */}
        <div className="social-media-icons">
          <img src="/facebook.png" alt="facebook-icon" />
          <img src="/instagram.png" alt="facebook-icon" />
          <img src="/linkedin.png" alt="facebook-icon" />
          <img src="/twitter.png" alt="facebook-icon" />
          <img src="/github.png" alt="facebook-icon" />
        </div>
      </div>
    </div>
  );
}

export default App;
