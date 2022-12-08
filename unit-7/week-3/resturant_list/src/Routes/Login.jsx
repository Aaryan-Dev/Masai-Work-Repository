import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useEffect } from "react";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name: key, value } = e.target;
    setUser({ ...user, [key]: value });
  };

  const { isAuth, loginUser, tokenSetter } = useContext(AuthContext);

  const login_user = (event) => {
    console.log(user);
    event.preventDefault();

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        tokenSetter({ token: res.token });
        loginUser();
        console.log("res", res);
      });
  };
  if (isAuth) {
    console.log("Redirecting to Dashboard");
    // useEffect(() => {
    //   navigate("/dashboard");
    // }, [isAuth]);
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <div>
      <form data-testid="login-form" onSubmit={login_user}>
        <div>
          <label>
            Email
            <input
              onChange={(e) => handleChange(e)}
              data-testid="email-input"
              type="email"
              placeholder="email"
              name="email"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              onChange={(e) => handleChange(e)}
              data-testid="password-input"
              type="password"
              placeholder="password"
              name="password"
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
