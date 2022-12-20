import React from "react";
import "../App.css";
import Keyboard from "react-simple-keyboard";
import { useRef, useState } from "react";
import "react-simple-keyboard/build/css/index.css";
import { useEffect } from "react";

function Playzone() {
  const [input, setInput] = useState("");
  const [score, setScrore] = useState(0);
  const [what, setWhat] = useState("");
  const [counter, setcounter] = useState(0);
  const [all, setAll] = useState([]);
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();
  const [random, setRandom] = useState("");

  useEffect(() => {
    getDiff_data();
  }, []);

  const go = (diff) => {
    console.log(diff);

    if (diff === "mid") {
    } else if (diff === "low") {
    } else {
    }
  };

  const getDiff_data = () => {
    fetch("https://wordgame-b043.onrender.com/playzone", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("playtoken")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);

        if (res.random === undefined) {
          setRandom("");
          setWhat("Choose difficulty level first");
        } else {
          setRandom(res.random);
          setWhat(res.user_name);
          go(res.user_diff);
        }
      });
  };

  var new_input;

  const onChange = (input) => {
    let splice_sum = 0;

    for (let s = 0; s < all.length; s++) {
      splice_sum = splice_sum + all[s];
    }
    new_input = input.substring(splice_sum);
    if (input === random || new_input === random) {
      setAll([...all, random.length]);
      setScrore(score + random.length);
      setInput("✅");
      getDiff_data();
    } else {
      let splice_sum = 0;
      for (let s = 0; s < all.length; s++) {
        splice_sum = splice_sum + all[s];
      }
      new_input = input.substring(splice_sum);
      input = new_input;
      console.log(all);
      console.log(new_input, random.length);
      setInput(new_input);
      console.log("Input changed", new_input);
    }

    // const interval = setInterval(() => {
    //   setcounter(counter + 1);
    // }, 1000);

    // return () => clearInterval(interval);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <div className="captcha">
        <h3>SCORE - {score}</h3>
        <label className="lablee" htmlFor="wordbox-1">
          {`${random}`}
        </label>

        <div id="wordbox" className="inputin">
          {input}
        </div>
        <Keyboard
          keyboardRef={(r) => (keyboard.current = r)}
          layoutName={layout}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </div>
    </div>
  );
}

export default Playzone;
