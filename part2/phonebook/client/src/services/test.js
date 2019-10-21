const addNewName = e => {
  e.preventDefault();
  const personObject = {
    name: newName,
    number: newNumber
  };

  if (persons.some(e => e.name === newName)) {
    let personId = persons.find(item => item.name === newName);

    let updatedEntry = Object.assign(personId, personObject);

    if (
      window.confirm(
        `Do you want to update ${newName} with number ${newNumber}?`
      )
    ) {
      personsService
        .update(personId.id, personObject)
        .then(() => {
          setPersons(
            persons.map(item => (item.name === newName ? updatedEntry : item))
          );
          setNewName("");
          setNewNumber("");
          showMessage(`User ${newName} phone number updated`);
        })
        .catch(error => {
          showMessage(
            `Update failed. User ${newName} has already been removed from the phone book.`,
            false
          );
          setPersons(persons.filter(n => n.name !== newName));
        });
    }
  } else {
    if (persons.some(e => e.number === newNumber)) {
      showMessage(`# ${newNumber} is already in the phone book.`, false);
    } else {
      if (newName === "" || newNumber === "") {
        showMessage(`The name and number must not be empty`, false);
      } else {
        personsService
          .create(personObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson));
            setNewName("");
            setNewNumber("");
            showMessage(`User ${newName} has been added to the phone book`);
          })
          .catch(error => {
            console.log(error.response.data.error);
            return showMessage(
              `Failed to add number. More about error: ${error.response.data.error}`,
              false
            );
          });
        personsService
          .getAll()
          .then(response => {
            setPersons(response);
          })
          .catch(error => showMessage("Could not retrieve data", false));
      }
    }
  }
};
t;
