import React, { useEffect, useState } from "react";
import { Display } from "./Display";

// import { AppContext } from "./Context";

const Country = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log(res);
        setCountry(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(country);

  return (
    <div>
      Countries List
      <Display data={country} />
    </div>
  );
};

export { Country };
