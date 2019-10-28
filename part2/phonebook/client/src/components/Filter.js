import React from "react";

const Filter = ({ filter, onChange }) => {
  return (
    <div className="col m-3 pt-2">
      Filter Shown with <input onChange={onChange} value={filter} />
    </div>
  );
};

export default Filter;
