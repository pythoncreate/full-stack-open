import React from "react";

const Filter = ({ filter, onChange }) => {
  return (
    <div>
      Filter Shown with <input onChange={onChange} value={filter} />
    </div>
  );
};

export default Filter;
