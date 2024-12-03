import React, { useState } from "react";
import { useContext } from "react";

import { AppContext } from "./context";

import "../App.css";

const Display = ({ data }) => {
  const [append, setappend] = useState({});
  const value = useContext(AppContext);
  const { theme } = value;

  // console.log(data);

  let modal = [];
  data.map((el, index) =>
    modal.push({
      id: index,
      Native_name: el.name.nativeName,
      Sub_Region: el.subregion,
      Currency_Name: el.currencies,
      Language_Names: el.languages,
      Border_Countries: el.borders,
    })
  );

  const appendIt = (ind) => {
    data.forEach((el, index) => {
      // console.log(index);
      if (index === modal[ind].id) {
        setappend(modal[ind]);
      }
    });
  };

  console.log(append);

  return (
    <div
      style={
        theme === "dark"
          ? {
              color: "white",
              background: "black",
              padding: "5px",
              border: "2px solid black",
            }
          : {
              color: "black",
              padding: "5px",
              background: "white",
              border: "2px solid white",
            }
      }
      id="card"
    >
      {data.map((el, index) => (
        <div
          style={
            theme === "dark"
              ? {
                  color: "white",
                  background: "black",
                  padding: "5px",
                  border: "2px solid black",
                }
              : {
                  color: "black",
                  padding: "5px",
                  backgroundcolor: "white",
                  border: "2px solid white",
                }
          }
          id={index}
          key={index}
        >
          <img src={el.flags.svg} alt="img" />
          <h2>{el.name.common}</h2>
          <p>
            <b>Population : </b>
            {el.population}
          </p>
          <p>
            <b>Region :</b> {el.region}
          </p>
          <p>
            <b>Capital :</b> {el.capital}
          </p>
          {/* onClick={() => make_modal()} */}
          <button id="button" onClick={() => appendIt(index)}>
            More Details
          </button>

          <h6>
            {index === append.id ? `Sub region : ${append.Sub_Region}` : ""}
          </h6>
          <h6>
            {index === append.id && append.Border_Countries !== undefined
              ? `Border countries : ${append.Border_Countries?.[0]}, ${append.Border_Countries?.[1]}, ${append.Border_Countries?.[2]}  `
              : ""}
          </h6>

          <h6>
            {index === append.id
              ? `Currency_Name : ${Object.keys(append.Currency_Name)}`
              : ""}
          </h6>
          <h6>
            {index === append.id
              ? `Language_Names : ${Object.keys(append.Language_Names)}`
              : ""}
          </h6>
          <h6>
            {index === append.id
              ? `Native_name : ${Object.keys(append.Native_name)}`
              : ""}
          </h6>
        </div>
      ))}
    </div>
  );
};

export { Display };
