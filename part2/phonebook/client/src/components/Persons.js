import React from "react";

const Persons = ({ persons }) => {
  return (
    <div className="col m-3">
      <div>
        <h5 className="pb-3">Phone Numbers</h5>
      </div>
      <div>{persons}</div>
    </div>
  );
};

export default Persons;
