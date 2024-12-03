import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// create a form using different input boxes to collect user information

// name - text
// gender - select box
// role - select box
// marital status - checkbox
// submit the form and prevent the default behaviour

// use a single onChange handler for this

const initial = {
  name: "",
  gender: "male",
  role: "admin",
  married: false,
};

function App() {
  const [formstate, setFormstate] = useState(initial);
  const [users, setUsers] = useState([]);

  const handle = (e) => {
    // console.log(e.target);

    const { name: key, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormstate({
        ...formstate,
        [key]: checked,
      });
    } else {
      setFormstate({
        ...formstate,
        [key]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formstate]);

    console.log(formstate);
  };
  console.log(users);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Form</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              value={formstate.name}
              onChange={handle}
              name="name"
              type="text"
              placeholder="name"
            />
          </div>
          <div>
            <select value={formstate.gender} onChange={handle} name="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <select value={formstate.role} onChange={handle} name="role">
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <div>
            <lable>
              Married
              <input
                onChange={handle}
                name="married"
                type="checkbox"
                checked={formstate.married}
              />
            </lable>
          </div>
          <div>
            <input type="submit" value="submit" />
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
