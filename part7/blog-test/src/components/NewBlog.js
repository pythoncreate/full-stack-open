import React from "react";
import { connect } from "react-redux";
import { createBlog } from "../reducers/blogReducer";
import { withRouter } from "react-router-dom";
import { setNotification } from "../reducers/notificationReducer";
import { useField } from "../hooks";
import { Form } from "semantic-ui-react";

const NewBlog = props => {
  const newTitle = useField("text");
  const newAuthor = useField("text");
  const newURL = useField("text");

  const addBlog = async event => {
    event.preventDefault();

    const blogObject = {
      url: newURL.value,
      title: newTitle.value,
      author: newAuthor.value
    };
    await props.createBlog(blogObject);
    props.history.push("/blogs");
    setNotification(`New Blog Created!`, 4);
    // newTitle.reset();
    // newAuthor.reset();
    // newURL.reset();
  };

  return (
    <Form onSubmit={addBlog}>
      <Form.Field>
        <Form.Input {...newTitle} reset={null} label="Title" id="title" />
      </Form.Field>
      <Form.Field>
        <Form.Input {...newAuthor} reset={null} label="Author" id="author" />
      </Form.Field>
      <Form.Field>
        <Form.Input {...newURL} reset={null} label="URL" id="url" />
      </Form.Field>
      <Form.Button type="submit">add blog</Form.Button>
    </Form>
  );
};

const mapDispatchToProps = {
  createBlog,
  setNotification
};

const AddBlog = withRouter(NewBlog);

export default connect(null, mapDispatchToProps)(AddBlog);
