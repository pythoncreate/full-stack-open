import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import personService from "./services/numbers";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFiltered] = useState("");

  useEffect(() => {
    personService.getAll().then(initialPersons => setPersons(initialPersons));
  }, []);

  console.log("Persons", persons);

  const peopleToShow =
    filter === ""
      ? persons
      : persons.filter(person =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );

  const rows = () =>
    peopleToShow.map(p => (
      <p key={p.name}>
        {p.name} {p.number}{" "}
        <span>
          <button value={p.id} onClick={deleteNum}>
            delete
          </button>
        </span>
      </p>
    ));

  const deleteNum = event => {
    let personID = event.target.value;
    if (window.confirm("Do you really want to delete?")) {
      personService
        .deletePerson(personID)
        .then(() => {
          let check = persons.filter(item => item.id != personID);
          console.log("Check", check);
          setPersons(check);
        })
        .catch(error => {
          console.log("Error", error);
        });
    }
  };

  const addNameNum = event => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    };
    console.log("Name", newName);
    console.log("Number", newNumber);

    if (persons.some(p => p.name.toLowerCase() === newName.toLowerCase())) {
      let personId = persons.find(
        p => p.name.toLowerCase() === newName.toLowerCase()
      );
      let updatedEntry = Object.assign(personId, personObject);
      window.confirm(
        `${newName} is allready in the phonebok. Would you like to replace the old number with a new one?`
      );
      personService.update(personId.id, personObject).then(() => {
        setPersons(
          persons.map(item => (item.name === newName ? updatedEntry : item))
        );
        setNewName("");
        setNewNumber("");
      });
    } else {
      personService
        .create(personObject)
        .then(console.log("Object", personObject))
        .then(data => setPersons(persons.concat(data)));
      setNewName("");
      setNewNumber("");
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
