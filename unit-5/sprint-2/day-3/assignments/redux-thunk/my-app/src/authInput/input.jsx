import { useState } from "react";

const inform = {
  email: "",
  password: "",
};

const IIInput = ({ takeform }) => {
  const [form, setForm] = useState(inform);

  const handleForm = (e) => {
    const { value, name } = e.target;

    setForm({ ...form, [name]: value });
  };

  const doIt = () => {
    takeform(form);
  };

  return (
    <>
      <input
        value={form.email}
        name="email"
        placeholder="email"
        onChange={(e) => handleForm(e)}
        type="text"
      ></input>
      <input
        placeholder="password"
        value={form.password}
        name="password"
        onChange={(e) => handleForm(e)}
        type="text"
      ></input>

      <button onClick={() => doIt()}>submit</button>
    </>
  );
};

export default IIInput;
