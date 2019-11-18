import React from "react";
import { connect } from "react-redux";
import { clearSearch } from "../reducers/searchReducer";
import Search from "./Search";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";

const searchBlogs = ({ blogs, search }) => {
  return search
    ? blogs.filter(a => a.title.toLowerCase().includes(search.toLowerCase()))
    : blogs;
};

const Blogs = ({ blogsToShow, filter, clearSearch }) => {
  const clear = () => {
    clearSearch();
  };

  return (
    <>
      <Search />
      <div>
        <h3>Blogs</h3>
        <Link onClick={() => clear()} to="/newblog">
          create a new blog post
        </Link>
        <Table striped celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Blog Title</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {filter === "DESC"
              ? blogsToShow
                  .sort((a, b) => b.likes - a.likes)
                  .map(blog => (
                    <Table.Row key={blog.id}>
                      <Table.Cell>
                        <Link onClick={() => clear()} to={`/blogs/${blog.id}`}>
                          {blog.title}
                        </Link>
                      </Table.Cell>
                    </Table.Row>
                  ))
              : blogsToShow
                  .sort((a, b) => a.likes - b.likes)
                  .map(blog => (
                    <Table.Row key={blog.id}>
                      <Table.Cell>
                        <Link onClick={() => clear()} to={`/blogs/${blog.id}`}>
                          {blog.title}
                        </Link>
                      </Table.Cell>
                    </Table.Row>
                  ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    blogs: state.blogs,
    filter: state.filter,
    blogsToShow: searchBlogs(state)
  };
};

const mapDispatchToProps = {
  clearSearch
};

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
