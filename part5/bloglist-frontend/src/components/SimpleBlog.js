import React from "react";

const SimpleBlog = ({ blog, onClick }) => (
  <div>
    <div>
      <span id="title">{blog.title}</span>{" "}
      <span id="author">{blog.author}</span>
    </div>
    <div>
      blog has <span id="likes">{blog.likes}</span> likes
      <button onClick={onClick}>like</button>
    </div>
  </div>
);

export default SimpleBlog;
