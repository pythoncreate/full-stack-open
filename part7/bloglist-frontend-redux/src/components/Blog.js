import React, { useState } from "react";
import { addLike } from "../reducers/blogReducer";

const Blog = ({ blog, user, removeBlog }) => {
  const [visible, setVisible] = useState(false);

  const vote = async blog => {
    await addLike(blog);
  };

  const normal = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5
  };

  const hidden = {
    display: "none"
  };

  const toggleRemove = () => {
    if (blog.user.username === user.username)
      return <button onClick={() => removeBlog(blog)}>remove</button>;
  };

  return (
    <>
      <h3 id="title" onClick={() => setVisible(!visible)}>
        {blog.title} by {blog.author}
      </h3>
      <div style={visible ? normal : hidden}>
        <p>
          {blog.likes} likes <button onClick={() => vote(blog)}>like</button>
        </p>
        <p>Added by {blog.user.name}</p>
        <p>{toggleRemove()}</p>
      </div>
    </>
  );
};

export default Blog;
