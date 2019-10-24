const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const Person = require("./models/person");

morgan.token("body", function(req, res) {
  return JSON.stringify(req.body);
});

app.use(
  morgan(":method :url :status :response-time ms - :res[content-length] :body")
);
app.use(bodyParser.json());
app.use(express.static("build"));
app.use(cors());

let persons = [
  {
    id: 1,
    name: "Chris",
    number: "7817898889"
  },
  {
    id: 2,
    name: "Chris",
    number: "7817898889"
  },
  {
    id: 3,
    name: "Chris",
    number: "7817898889"
  }
];

// const Person = mongoose.model("Person", personSchema);

//End Mongoose Data

//Get all Numbers

app.get("/api/persons", (req, res, next) => {
  Person.find({})
    .then(persons => {
      res.json(persons);
    })
    .catch(error => next(error));
});

app.get("/api/persons/:id", (request, response) => {
  // const id = Number(request.params.id);
  // const person = persons.find(person => person.id === id);
  // if (person) {
  //   response.json(person);
  // } else {
  //   response.status(404).end();
  // }
  Person.findById(request.params.id).then(person => {
    response.json(person.toJSON());
  });
});

app.post("/api/persons/", (request, response) => {
  const randomID = Math.floor(Math.random() * Math.floor(1000));

  const body = request.body;

  if (!body.name) {
    return response.status(400).json({
      error: "Name is missing"
    });
  }

  if (!body.number) {
    return response.status(400).json({
      error: "Number is missing"
    });
  }

  if (persons.some(p => p.name.toLowerCase() === body.name.toLowerCase())) {
    return response.status(400).json({
      error: "Name allready in phonebook"
    });
  }

  console.log("Person", body);

  const person = new Person({
    id: randomID,
    name: body.name,
    number: body.number
  });

  // persons = persons.concat(newPerson);

  person.save().then(savedPerson => {
    response.json(savedPerson.toJSON());
  });
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter(person => person.id !== id);
  response.status(204).end();
});

app.get("/info", (req, res) => {
  res.send(
    "<div>Phonebook has info for " +
      persons.length +
      " people." +
      `<br/><br/>` +
      new Date()
  );
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
