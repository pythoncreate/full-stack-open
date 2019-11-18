import React from "react";
import { connect } from "react-redux";
import { createUser } from "../reducers/userReducer";
import { withRouter } from "react-router-dom";
import { login } from "../reducers/loginReducer";
import { setNotification } from "../reducers/notificationReducer";
import { Form } from "semantic-ui-react";
import { useField } from "../hooks";

const NewUser = props => {
  const newName = useField("text");
  const newUserName = useField("text");
  const newPassword = useField("text");

  const addUser = async event => {
    try {
      event.preventDefault();

      const userObject = {
        name: newName.value,
        username: newUserName.value,
        password: newPassword.value
      };

      const loginUser = {
        username: newUserName.value,
        password: newPassword.value
      };

      await props.createUser(userObject);
      await props.login(loginUser);
      //   newName.reset();
      //   newUserName.reset();
      //   newPassword.reset();
      props.history.push("/");
      props.setNotification(`You've added a new account!`, 4);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      <h1>Create a New Blog Account</h1>
      <Form onSubmit={addUser}>
        <Form.Field>
          <Form.Input {...newName} reset={null} label="Name" />
        </Form.Field>
        <Form.Field>
          <Form.Input {...newUserName} reset={null} label="Username" />
        </Form.Field>
        <Form.Field>
          <Form.Input {...newPassword} reset={null} label="Password" />
        </Form.Field>
        <Form.Button type="submit">sign up</Form.Button>
      </Form>
    </>
  );
};

const mapDispatchToProps = {
  createUser,
  login,
  setNotification
};

const CreateUser = withRouter(NewUser);

export default connect(null, mapDispatchToProps)(CreateUser);
