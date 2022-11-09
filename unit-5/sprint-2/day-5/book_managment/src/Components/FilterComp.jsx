import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

//1. Update the URL Search params when the user selects any category
//2. Persist the selection on page refresh
const FilterComp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategoryFilters = searchParams.getAll("category");
  const initialSortBy = searchParams.getAll("sortBy");

  const [category, setCategory] = useState(initialCategoryFilters || []); //[ "Novel", "Thriller"]
  const [sortBy, setSortBy] = useState(initialSortBy[0] || "");
  const handleFilterCheckbox = (e) => {
    // check if the value is present, then remove it, else add it.
    const newCategories = [...category];
    if (newCategories.includes(e.target.value)) {
      //remove it
      newCategories.splice(newCategories.indexOf(e.target.value), 1);
    } else {
      newCategories.push(e.target.value);
    }
    setCategory(newCategories);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  //if the category changes, then update the search params in the URL

  useEffect(() => {
    //adding the category in the URL Search Params
    if (category || sortBy) {
      let params = {};
      category && (params.category = category);
      sortBy && (params.sortBy = sortBy);

      setSearchParams(params);
    }
  }, [category, setSearchParams, sortBy]);

  return (
    <div>
      <h3>Filter Comp</h3>
      <div>
        <div>
          <input
            type="checkbox"
            value="Novel"
            checked={category.includes("Novel")}
            onChange={handleFilterCheckbox}
          />
          <label>Novel</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Motivational"
            checked={category.includes("Motivational")}
            onChange={handleFilterCheckbox}
          />
          <label>Motivational</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Science_Fiction"
            checked={category.includes("Science_Fiction")}
            onChange={handleFilterCheckbox}
          />
          <label>Science Fiction</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Thriller"
            checked={category.includes("Thriller")}
            onChange={handleFilterCheckbox}
          />
          <label>Thriller</label>
        </div>
      </div>

      <h3>Sort Comp</h3>
      <div onChange={handleSort}>
        <input
          type="radio"
          value="asc"
          name="sortBy"
          defaultChecked={sortBy === "asc"}
        />
        <label>Ascending</label>
        <br />
        <input
          type="radio"
          value="desc"
          name="sortBy"
          defaultChecked={sortBy === "desc"}
        />
        <label>Descending</label>
      </div>
    </div>
  );
};

//Event bubbling and Event Capturing

export default FilterComp;
