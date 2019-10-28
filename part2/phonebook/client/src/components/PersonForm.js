import React from "react";

const PersonForm = ({ onSubmit, name, number }) => {
  return (
    <div className="col m-3">
      <div>
        <h5 className="pb-3">Add a Number To The Phonebook</h5>
      </div>
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
    </div>
  );
};
export default PersonForm;
