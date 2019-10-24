const mongoose = require("mongoose");

const password = process.argv[2];
const newName = process.argv[3];
const newNumber = process.argv[4];

const url = `mongodb+srv://cdogstu99:${password}@cluster0-ydrdq.mongodb.net/numbers?retryWrites=true`;

mongoose
  .connect(url, {
    useNewUrlParser: true
  })
  .catch(error => {
    console.log("Error while connecting to MongoDB:", error.message);
    process.exit(1);
  });

const personSchema = new mongoose.Schema({
  name: String,
  number: String
});

const Person = mongoose.model("Person", personSchema);

//Prompt user to enter password if they do not

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

///List out the numbers in the phonebook if the user enters just the password

if (process.argv.length === 3) {
  Person.find({}).then(persons => {
    console.log("phonebook");
    persons.forEach(person => console.log(`${person.name} ${person.number}`));
    mongoose.connection.close();
  });
}

//Add name and number to the database and output to the user on command line

if (process.argv.length === 5) {
  const person = new Person({
    name: newName,
    number: newNumber
  });

  person.save().then(() => {
    console.log(`Added ${newName} number ${newNumber} to the phonebook`);
    mongoose.connection.close();
  });
}
