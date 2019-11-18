import React from "react";
import { connect } from "react-redux";
import { Menu, Button } from "semantic-ui-react";
import { clearSearch } from "../reducers/searchReducer";
import { logout } from "../reducers/loginReducer";
import { Link } from "react-router-dom";

const Navbar = props => {
  const clear = () => {
    props.clearSearch();
  };

  const logout = () => {
    props.logout();
  };

  return (
    <Menu inverted>
      <Menu.Item link>
        <Link onClick={() => clear()} to="/">
          home
        </Link>
      </Menu.Item>
      <Menu.Item link>
        <Link onClick={() => clear()} to="/blogs">
          blogs
        </Link>
      </Menu.Item>
      <Menu.Item link>
        <Link onClick={() => clear()} to="/users">
          users
        </Link>
      </Menu.Item>
      <Menu.Item link>
        {props.loggedUser ? (
          <span>
            <em>Hi {props.loggedUser.name} you're logged in!</em>{" "}
            <Button size="mini" onClick={logout}>
              logout
            </Button>
          </span>
        ) : (
          <Link onClick={() => clear()} to="/login">
            login
          </Link>
        )}
      </Menu.Item>
    </Menu>
  );
};

const mapStateToProps = state => {
  return {
    loggedUser: state.loggedUser
  };
};

const mapDispatchToProps = {
  clearSearch,
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
