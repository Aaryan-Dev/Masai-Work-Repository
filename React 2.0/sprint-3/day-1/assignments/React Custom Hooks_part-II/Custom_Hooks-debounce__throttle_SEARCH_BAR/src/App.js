import React, { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import { countries } from "./utils/countries";
const App = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const queryHandler = useCallback((val) => {
    setQuery(val);
  }, []);

  useEffect(() => {
    if (query === "") {
      setSuggestions([]);
    } else {
      let newListOfSuggestion = countries
        .filter((item) => {
          const queryCountry = query.trim().toLowerCase();
          return item.country.toLowerCase().indexOf(queryCountry) !== -1
            ? true
            : false;
        })
        .map((item) => item.country);
      console.log(newListOfSuggestion);
      setSuggestions(newListOfSuggestion);
    }
  }, [query]);

  return (
    <div className="app">
      <h2>Search Bar</h2>
      <h4>The Search query is ${query}</h4>
      <SearchBar setQuery={queryHandler} suggestions={suggestions} />
    </div>
  );
};

export default App;
