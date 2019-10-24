import React from "react";

const PersonForm = ({ onSubmit, name, number }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          name: <input value={name.value} onChange={name.onChange} />
        </div>
        <p></p>
        <div>
          number: <input value={number.value} onChange={number.onChange} />
        </div>
        <p></p>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};
export default PersonForm;
