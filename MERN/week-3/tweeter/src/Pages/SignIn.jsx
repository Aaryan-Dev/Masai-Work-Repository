import { useState } from "react";
// import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { Con } from "../Context/AppContext";

let initial = {
  username: "",

  email: "",
  password: "",
};

function SignIn() {
  const [form, setform] = useState(initial);
  // const [text, setText] = useState("");
  // const navigate = useNavigate();

  const value = useContext(Con);

  const { isAuth, getinUser, id } = value;
  // console.log(isAuth);

  if (isAuth) {
    return <Navigate to={`/user/${id}`} />;
  }

  const handle = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const sub = (e) => {
    e.preventDefault();

    if (form.username === "" || form.email === "" || form.password === "") {
      alert("Enter all Fields");
    } else {
      getinUser(form);
    }
  };

  return (
    <div id="get">
      <form id="form" onSubmit={sub} data-testid="login-form">
        <div>
          <label>
            Username:
            <input
              onChange={handle}
              name="username"
              value={form.username}
              data-testid="username-input"
              type="text"
              placeholder="username"
            />
          </label>
        </div>

        <div>
          <label>
            Email:
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
            Password:
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
    </div>
  );
}
export default SignIn;
