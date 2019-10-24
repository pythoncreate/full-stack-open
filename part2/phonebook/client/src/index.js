import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import "./index.css";
import personService from "./services/numbers";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [notification, setNotification] = useState(null);
  const [success, setSuccess] = useState(null);
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
      <p className="number" key={p.name}>
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
          setNotification(
            `Sorry that user was already deleted from the phonebook`,
            false
          );
          setPersons(persons.filter(item => item.id != personID));
        });
    }
  };

  const addNameNum = event => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    };

    if (persons.some(p => p.name.toLowerCase() === newName.toLowerCase())) {
      let personId = persons.find(
        p => p.name.toLowerCase() === newName.toLowerCase()
      );
      let updatedEntry = Object.assign(personId, personObject);

      window.confirm(
        `${newName} is allready in the phonebok. Would you like to replace the old number with a new one?`
      );

      personService
        .update(personId.id, personObject)
        .then(() => {
          setPersons(
            persons.map(item => (item.name === newName ? updatedEntry : item))
          );
          showMessage(`Success! User ${newName} was updated`);
          setNewName("");
          setNewNumber("");
        })
        .catch(error => {
          showMessage(
            `Update failed, ${newName} allready removed from phonebook`,
            false
          );
        });
    } else {
      personService
        .create(personObject)
        .then(data => {
          setPersons(persons.concat(data));
          showMessage(`Success! User ${newName} was added`);
          setNewName("");
          setNewNumber("");
        })
        .catch(error => {
          showMessage(
            `Sorry can't add that number. Here's why: ,
            ${error.response.data.error}`,
            false
          );
        });
    }
  };

  const showMessage = (message, successNotification = true) => {
    setNotification(message);
    setSuccess(successNotification);
    setTimeout(() => {
      setNotification(null);
      setSuccess(null);
    }, 3000);
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
      <h1>Phonebook</h1>

      <Notification notification={notification} success={success} />

      <Filter value={filter} onChange={handleSearch} />

      <h2>Add a new</h2>

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
