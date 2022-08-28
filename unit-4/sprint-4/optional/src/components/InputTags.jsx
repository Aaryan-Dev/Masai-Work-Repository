import { useState } from "react";
import Card from "./Card";

const initial = {
  name: "",
  height: "",
  weight: "",
  power: "",
};

const InputTags = () => {
  const [data, setData] = useState([]);
  const [power, setPower] = useState([]);
  const [form, setForm] = useState(initial);
  const [show, setShow] = useState(false);

  const handle = (e) => {
    const { value, name } = e.target;

    setForm({ ...form, [name]: value });
  };

  console.log(form);

  const add = (event) => {
    setPower([]);

    setShow(false);
    event.preventDefault();

    setData([...data, form]);
  };
  console.log(data);

  const most = () => {
    setShow(true);

    data.sort(function (a, b) {
      if (Number(a.power) < Number(b.power)) {
        return 1;
      } else if (Number(a.power) > Number(b.power)) {
        return -1;
      } else {
        return 0;
      }
    });

    setPower([data[0]]);
  };

  const give = () => {
    // setNow(false);

    setShow(false);
    setData([...data]);
  };

  return (
    <>
      <form onSubmit={add}>
        <input
          onChange={(e) => handle(e)}
          value={form.name}
          name="name"
          data-testid="input-name"
          type="text"
        />
        <input
          onChange={(e) => handle(e)}
          value={form.height}
          name="height"
          data-testid="input-height"
          type="text"
        />
        <input
          onChange={(e) => handle(e)}
          value={form.weight}
          name="weight"
          data-testid="input-weight"
          type="text"
        />
        <input
          onChange={(e) => handle(e)}
          value={form.power}
          name="power"
          data-testid="input-power"
          type="text"
        />
        <button
          disabled={
            form.name === "" ||
            form.height === "" ||
            form.weight === "" ||
            form.power === ""
          }
          type="submit"
          onClick={add}
          data-testid="add-button"
        >
          Add SuperHero
        </button>
      </form>
      <button
        onClick={most}
        disabled={data.length <= 1}
        data-testid="most-powerfull"
      >
        Most Powerful Superhero
      </button>
      <button
        onClick={give}
        disabled={data.length <= 1}
        data-testid="all-superheroes"
      >
        Show All
      </button>
      {!show && <Card data={data} />}
      {show && <Card data={power} />}
    </>
  );
};

export default InputTags;
