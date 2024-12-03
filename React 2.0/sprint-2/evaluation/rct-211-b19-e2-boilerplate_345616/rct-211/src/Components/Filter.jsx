import React from "react";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input type="checkbox" value="Sneakers" />
          <label>Sneakers</label>
        </div>
        <div>
          <input type="checkbox" value="Loafers" />
          <label>Loafers</label>
        </div>
        <div>
          <input type="checkbox" value="Canvas" />
          <label>Canvas</label>
        </div>
        <div>
          <input type="checkbox" value="Boots" />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
