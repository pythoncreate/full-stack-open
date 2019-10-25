const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

require("dotenv").config();

const username = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASS;

const url = `mongodb+srv://${username}:${password}@cluster0-ydrdq.mongodb.net/numbers?retryWrites=true&w=majority`;

mongoose
  .connect(url, {
    useNewUrlParser: true
  })
  .then(result => {
    console.log("connected to MongoDB");
  })
  .catch(error => {
    console.log("Error while connecting to MongoDB:", error.message);
    process.exit(1);
  });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    uniqueCaseInsensitive: true
  },
  number: { type: String, required: true, unique: true, minlength: 8 }
});

personSchema.plugin(uniqueValidator);

personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model("Person", personSchema);
