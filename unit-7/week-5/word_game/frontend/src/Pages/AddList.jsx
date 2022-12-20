import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

let initial = {
  name: "",
  difficulty: "",
};

function AddList() {
  const [form, setform] = useState(initial);

  const navigate = useNavigate();

  const handle = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const addList = (form) => {
    fetch("https://wordgame-b043.onrender.com/adduser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("playtoken", res.msg);
        navigate("/playzone");
      });
  };

  const sub = (e) => {
    e.preventDefault();
    if (
      form.name === "" ||
      form.difficulty === "" ||
      form.name === undefined ||
      form.difficulty === undefined
    ) {
      alert("Enter all Fields");
    } else {
      console.log(form);
      addList(form);
    }
  };

  return (
    <>
      <div id="get">
        <form id="form" onSubmit={sub} data-testid="login-form">
          <div>
            <pre>
              <label>
                Name:
                <input
                  onChange={handle}
                  name="name"
                  value={form.name}
                  type="text"
                  placeholder="name"
                />
              </label>
            </pre>
          </div>
          <div>
            <label>
              Difficulty:
              <select
                value={form.difficulty}
                name="difficulty"
                onChange={handle}
              >
                <option value="">Level</option>
                <option value="low">Low level - 30 seconds</option>
                <option value="mid">Medium level - 20 seconds</option>
                <option value="high">High level - 10 seconds</option>
              </select>
              {/* <input type="text" placeholder="difficulty" /> */}
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
export default AddList;
