import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { useContext } from "react";
import { Con } from "../Context/AppContext";

let initial = {
  email: "",
  password: "",
};

function Login() {
  const [form, setform] = useState(initial);
  // const [text, setText] = useState("");

  const value = useContext(Con);

  const { isAuth, token, loginUser, logoutUser } = value;
  console.log(isAuth);

  if (isAuth) {
    return <Navigate to="/dashboard" />;
  }

  const handle = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
    console.log(form);
  };

  const sub = (e) => {
    e.preventDefault();
    loginUser(form);
  };

  return (
    <div>
      <form onSubmit={sub} data-testid="login-form">
        <div>
          <label>
            Email
            <input
              onChange={handle}
              name="email"
              value={form.email}
              data-testid="email-input"
              type="email"
              placeholder="email"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              onChange={handle}
              value={form.password}
              name="password"
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
