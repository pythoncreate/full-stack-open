const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  url: String,
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

blogSchema.set("toJSON", {
  transform: doc => ({
    // eslint-disable-next-line no-underscore-dangle
    id: doc._id.toString(),
    title: doc.title,
    author: doc.author,
    url: doc.url,
    likes: doc.likes,
    user: doc.user
  })
});

module.exports = mongoose.model("Blog", blogSchema);
