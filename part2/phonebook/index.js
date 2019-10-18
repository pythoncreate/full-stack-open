import React, { useState } from "react";
import ReactDOM from "react-dom";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFiltered] = useState("");

  const peopleToShow =
    filter === ""
      ? persons
      : persons.filter(person =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );

  const rows = () =>
    peopleToShow.map(p => (
      <p key={p.name}>
        {p.name} {p.number}
      </p>
    ));

  const addNameNum = event => {
    event.preventDefault();
    if (persons.some(p => p.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} has allready been added to the phonebook`);
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      };
      setPersons(persons.concat(personObject));
      console.log("Persons", persons);
    }
  };

  const handleSearch = event => {
    setFiltered(event.target.value);
  };

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={filter} onChange={handleSearch} />

      <h3>Add a new</h3>

      <PersonForm
        onSubmit={addNameNum}
        name={{ value: newName, onChange: handleNameChange }}
        number={{ value: newNumber, onChange: handleNumberChange }}
      />

      <h3>Numbers</h3>

      <Persons persons={rows()} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
