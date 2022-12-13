import { useState } from "react";
import "../App.css";
// import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { Con } from "../Context/AppContext";

let initial = {
  username: "",
  // fullName: "",
  email: "",
  password: "",
};

function SignUp() {
  const [form, setform] = useState(initial);
  // const [text, setText] = useState("");
  const navigate = useNavigate();

  const value = useContext(Con);

  const { isAuth, loginUser } = value;
  // console.log(isAuth);

  if (isAuth) {
    return <Navigate to="/signin" />;
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
      loginUser(form);
      navigate("/login");
    }
  };

  return (
    <>
      Sign Up
      <div id="get">
        <form id="form" onSubmit={sub} data-testid="login-form">
          <div>
            <label>
              Name:
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
          {/* <div>
          <img src="https://i.pravatar.cc/200" alt="img" />
        </div> */}
          {/* <div>
          <label>
          Full Name:
          <input
              onChange={handle}
              name="fullName"
              value={form.fullName}
              data-testid="name-input"
              type="text"
              placeholder="Full Name"
              />
              </label>
            </div> */}
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
    </>
  );
}
export default SignUp;
