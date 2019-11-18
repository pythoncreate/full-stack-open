import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { clearSearch } from "../reducers/searchReducer";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";

const Users = props => {
  const clear = () => {
    clearSearch();
  };

  return (
    <div>
      <h2>Users</h2>
      <Table striped celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell># Blogs</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.users.map(user => (
            <Table.Row key={user.id}>
              <Table.Cell>
                <Link onClick={() => clear()} to={`/users/${user.id}`}>
                  {user.name}
                </Link>
              </Table.Cell>
              <Table.Cell>{user.blogs.length} </Table.Cell>
            </Table.Row>
          ))}
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

Users.propTypes = {
  users: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Users);
