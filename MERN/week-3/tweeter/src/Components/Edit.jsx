import { useState } from "react";
import "../App.css";
// import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import { useContext } from "react";
// import { Con } from "../Context/AppContext";

let initial = {
  fullName: "",
  email: "",
  password: "",
};

function Edit({ id }) {
  const [form, setform] = useState(initial);
  const navigate = useNavigate();
  // const [refresh, setRefresh] = useState(false);

  // const value = useContext(Con);

  // const { loginUser } = value;

  const handle = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const editUser = (form) => {
    let body1 = JSON.stringify(form);

    fetch(`https://json-db.onrender.com/user/${id}`, {
      method: "PATCH",
      body: body1,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // setToken(res.token);
        navigate("/");
        // window.location.reload();
        // alert("Edited Successfully");
      });
    alert("Edited Successfully");
  };

  const sub = (e) => {
    e.preventDefault();

    if (
      form.username === "" ||
      form.fullName === "" ||
      form.email === "" ||
      form.password === ""
    ) {
      alert("Enter all Fields");
    } else {
      editUser(form);
    }
  };

  return (
    <div id="get">
      <form id="form" onSubmit={sub} data-testid="login-form">
        <div>
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
          <input data-testid="form-submit" type="submit" value="Edit" />
        </div>
      </form>
    </div>
  );
}
export default Edit;
