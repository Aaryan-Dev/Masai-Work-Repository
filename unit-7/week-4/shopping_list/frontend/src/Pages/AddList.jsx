import { useEffect, useState } from "react";
import "../App.css";
import { Display } from "../Components/Display";

let initial = {
  title: "",
  quantity: "",
  priority: "",
  description: "",
};

function AddList() {
  const [data, setData] = useState([]);
  const [form, setform] = useState(initial);

  const handle = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  useEffect(() => {
    fetch("https://a-backend.onrender.com/getlist")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setData(res.bmi_data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data.length]);

  const disp = () => {
    fetch("https://a-backend.onrender.com/getlist")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setData(res.bmi_data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addList = (form) => {
    fetch("https://a-backend.onrender.com/addList", {
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
        alert("Data added successfully");
      })
      .then(() => disp());
  };
  const sub = (e) => {
    e.preventDefault();
    if (
      form.title === "" ||
      form.quantity === "" ||
      form.priority === "" ||
      form.description === ""
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
            <label>
              Title:
              <input
                onChange={handle}
                name="title"
                value={form.title}
                type="text"
                placeholder="title"
              />
            </label>
          </div>
          <div>
            <label>
              Quantity:
              <input
                onChange={handle}
                name="quantity"
                value={form.quantity}
                type="text"
                placeholder="quantity"
              />
            </label>
          </div>
          <div>
            <label>
              Priority:
              <input
                onChange={handle}
                value={form.priority}
                name="priority"
                type="text"
                placeholder="priority"
              />
            </label>
          </div>
          <div>
            <label>
              Description:
              <input
                onChange={handle}
                value={form.description}
                name="description"
                type="text"
                placeholder="description"
              />
            </label>
          </div>
          <div>
            <input data-testid="form-submit" type="submit" value="SUBMIT" />
          </div>
        </form>
      </div>
      <Display data={data} action={disp} />
    </>
  );
}
export default AddList;
