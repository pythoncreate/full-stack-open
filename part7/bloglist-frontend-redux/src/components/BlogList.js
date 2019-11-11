import React from "react";
import { connect } from "react-redux";
import Blog from "./Blog";
import { addLike, removeBlog } from "../reducers/blogReducer";

const BlogList = props => {
  const likeHandler = blog => {
    props.addLike(blog);
  };

  const removeHandler = blog => {
    props.removeBlog(blog);
  };

  return (
    <div>
      {props.blogsToShow
        .sort((a, b) => b.likes - a.likes)
        .map(blog => (
          <Blog
            key={blog.id}
            blog={blog}
            addLike={likeHandler}
            removeBlog={removeHandler}
            user={props.user}
          />
        ))}
    </div>
  );
};

const filteredBlogs = ({ blogs, filter }) => {
  return filter
    ? blogs.filter(a => a.content.toLowerCase().includes(filter))
    : blogs;
};

const mapStateToProps = state => {
  return {
    blogsToShow: filteredBlogs(state)
  };
};

const mapDispatchToProps = {
  addLike,
  removeBlog
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogList);
