import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../App.css";

const FilterComp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategoryFilters = searchParams.getAll("category");
  const initialSortBy = searchParams.getAll("sortBy");

  // kids, women, homedecor;

  const [category, setCategory] = useState(initialCategoryFilters || []);
  const [sortBy, setSortBy] = useState(initialSortBy[0] || "");
  const handleFilterCheckbox = (e) => {
    const newCategories = [...category];
    if (newCategories.includes(e.target.value)) {
      newCategories.splice(newCategories.indexOf(e.target.value), 1);
    } else {
      newCategories.push(e.target.value);
    }
    setCategory(newCategories);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    if (category || sortBy) {
      let params = {};
      category && (params.category = category);
      sortBy && (params.sortBy = sortBy);

      setSearchParams(params);
    }
  }, [category, setSearchParams, sortBy]);

  return (
    <div id="filter">
      <h3>Filter Comp</h3>
      <div>
        <div>
          <input
            type="checkbox"
            value="kids"
            checked={category.includes("kids")}
            onChange={handleFilterCheckbox}
          />
          <label>Kids</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="women"
            checked={category.includes("women")}
            onChange={handleFilterCheckbox}
          />
          <label>Women</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="homedecor"
            checked={category.includes("homedecor")}
            onChange={handleFilterCheckbox}
          />
          <label>Homedecor</label>
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
