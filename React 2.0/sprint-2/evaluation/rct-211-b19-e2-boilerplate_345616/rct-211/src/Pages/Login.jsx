import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { getLog } from "../Redux/AuthReducer/action";

const initialForm = {
  email: "",
  password: "",
};

const Login = () => {
  const [form, setform] = useState(initialForm);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const where = location.state?.data;

  const isAuth = useSelector((data) => data.AuthReducer.isAuth);
  const token = useSelector((data) => data.AuthReducer.token);

  const handle = (event) => {
    const { value, name } = event.target;

    setform({ ...form, [name]: value });
  };

  console.log(form);

  const give = (e) => {
    e.preventDefault();
    dispatch(getLog(form));
  };

  if (isAuth !== false) {
    navigate(where || "/", { replace: true });
  }

  return (
    <div>
      <h2>LOGIN</h2>
      <form>
        <div>
          <label>User Email</label>
          <br />
          <input
            onChange={handle}
            value={form.email}
            name="email"
            data-cy="login-email"
          />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input
            onChange={handle}
            value={form.password}
            name="password"
            data-cy="login-password"
          />
        </div>
        <button onClick={(e) => give(e)} type="submit" data-cy="login-submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
