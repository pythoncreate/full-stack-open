import React from "react";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";

const User = ({ user }) => {
  //   const remove = blog => {
  //     if (window.confirm("Do you really want to delete?")) {
  //       removeBlog(blog);
  //       setNotification(`You deleted ${blog.title}!`, 5);
  //     }
  //   };

  //   const toggleRemove = () => {
  //     if (blog.user.username === user.username)
  //       return <button onClick={() => remove(blog)}>remove</button>;
  //   };

  if (!user) return null;

  return (
    <div>
      <h2 id="title">Name: {user.name}</h2>
      <h3 id="title">Username: {user.username}</h3>
      <h4>These are the Blogs {user.name} has added</h4>
      <Table striped celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Blog Title</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {user.blogs.length > 0 ? (
            user.blogs.map(blog => (
              <Table.Row key={blog.id}>
                <Table.Cell>{blog.title}</Table.Cell>
              </Table.Row>
            ))
          ) : (
            <span>No Blogs Added Yet!</span>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(User);
