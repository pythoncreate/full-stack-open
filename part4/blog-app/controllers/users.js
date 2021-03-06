const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.post("/", async (request, response, next) => {
  const { username, password, name } = request.body;

  if (!username || username.length < 3) {
    return response
      .status(400)
      .json({ error: "Please enter a username of 3 characters or greater" });
  }

  if (!password || password.length < 3) {
    return response
      .status(400)
      .json({ error: "Please enter a password of 3 characters or greater" });
  }

  try {
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
      username: username,
      name: name,
      passwordHash
    });

    const savedUser = await user.save();

    response.json(savedUser);
  } catch (exception) {
    next(exception);
  }
});

usersRouter.get("/", async (request, response) => {
  const users = await User.find({}).populate("blogs");
  response.json(users.map(u => u.toJSON()));
});

module.exports = usersRouter;
