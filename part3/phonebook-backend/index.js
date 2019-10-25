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

app.use(express.static("build"));
app.use(bodyParser.json());
app.use(cors());

//Get all Numbers

app.get("/api/persons", (req, res, next) => {
  Person.find({})
    .then(persons => {
      res.json(persons);
    })
    .catch(error => next(error));
});

app.get("/api/persons/:id", (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person.toJSON());
      } else {
        response.status(404).end();
      }
    })
    .catch(error => next(error));
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

  const person = new Person({
    id: randomID,
    name: body.name,
    number: body.number
  });

  person.save().then(savedPerson => {
    response.json(savedPerson.toJSON());
  });
});

app.delete("/api/persons/:id", (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end();
    })
    .catch(error => next(error));
});

app.put("/api/persons/:id", (request, response, next) => {
  const body = request.body;

  const person = {
    name: body.name,
    number: body.number
  };

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson.toJSON());
    })
    .catch(error => next(error));
});

app.get("/info", (req, res, next) => {
  Person.find({})
    .then(persons => {
      res.send(
        `<div>Phonebook has info for ${persons.length} people.
         </div>
         <div>
        ${new Date()}
        </div>`
      );
    })
    .catch(error => next(error));
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
