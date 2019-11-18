import React from "react";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";
import Blog from "./Blog";
import { Link } from "react-router-dom";

const searchBlogs = ({ blogs, search }) => {
  return search
    ? blogs.filter(a => a.title.toLowerCase().includes(search.toLowerCase()))
    : blogs;
};

const Blogs = ({ blogsToShow, filter }) => {
  return (
    <div>
      <h2>Blogs</h2>
      <Table striped celled>
        <Table.Body>
          {filter === "DESC"
            ? blogsToShow
                .sort((a, b) => b.likes - a.likes)
                .map(blog => (
                  <Table.Row key={blog.id}>
                    <Table.Cell>
                      <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </Table.Cell>
                    <Table.Cell>{blog.user}</Table.Cell>
                  </Table.Row>
                ))
            : blogsToShow
                .sort((a, b) => a.likes - b.likes)
                .map(blog => (
                  <Table.Row key={blog.id}>
                    <Table.Cell>
                      <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </Table.Cell>
                    <Table.Cell>{blog.user}</Table.Cell>
                  </Table.Row>
                ))}
        </Table.Body>
      </Table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    blogs: state.blogs,
    blogsToShow: searchBlogs(state),
    filter: state.filter,
    search: state.search
  };
};

export default connect(mapStateToProps)(Blogs);