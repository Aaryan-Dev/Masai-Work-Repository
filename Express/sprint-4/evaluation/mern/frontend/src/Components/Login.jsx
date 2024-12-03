import { Routes, Route, Link } from "react-router-dom";

function Login() {
  return (
    <div>
      Login
      <br />
      <input type="text" placeholder="email" />
      <input type="password" placeholder="password" />
      <button>Login </button>
      <br />
      <br />
      <br />
      <Link to="/">Signup</Link>
    </div>
  );
}

export { Login };
