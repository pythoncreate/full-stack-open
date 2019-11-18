import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "semantic-ui-react";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import { login } from "../reducers/loginReducer";
import { setNotification } from "../reducers/notificationReducer";
import NewUser from "../components/NewUser";
import { useField } from "../hooks";
import { logout } from "../reducers/loginReducer";

const LoginForm = props => {
  const username = useField("text");
  const password = useField("password");

  const logout = () => {
    props.logout();
  };

  const handleLogin = async event => {
    event.preventDefault();
    try {
      const user = { username: username.value, password: password.value };
      await props.login(user);
      username.reset();
      password.reset();
      props.history.push("/");
    } catch (error) {
      props.setNotification("Sorry wrong username or password.", 5);
    }
  };

  if (props.loggedUser)
    return (
      <p>
        You are currently logged in. Would you like to{" "}
        <Link onClick={logout} to="/">
          logout?
        </Link>
      </p>
    );

  return (
    <>
      <h1>Login To Blog Application</h1>
      <Form onSubmit={handleLogin}>
        <Form.Field>
          <label>username</label>
          <input {...username.omitreset} name="username" id="username" />
        </Form.Field>
        <Form.Field>
          <label>password</label>
          <input {...password.omitreset} type="password" id="password" />
        </Form.Field>
        <Button type="submit" id="login">
          login
        </Button>
        <div>
          <br />
          <Link to="/newuser">or signup to become a new user</Link>
        </div>
      </Form>
    </>
  );
};

const mapStateToProps = state => {
  return {
    notification: state.notification,
    loggedUser: state.loggedUser
  };
};

const mapDispatchToProps = {
  login,
  setNotification,
  logout
};

const Login = withRouter(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
