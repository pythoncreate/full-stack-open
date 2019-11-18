import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form } from "semantic-ui-react";
import { addLike, removeBlog, addComment } from "../reducers/blogReducer";
import { setNotification } from "../reducers/notificationReducer";
import { useField } from "../hooks";

let Blog = ({
  history,
  addComment,
  addLike,
  removeBlog,
  setNotification,
  blog,
  user
}) => {
  const newComment = useField("text");

  if (!blog) return null;

  const vote = blog => {
    addLike(blog);
    setNotification(`You just liked ${blog.title}!`, 5);
  };

  const remove = blog => {
    if (window.confirm("Do you really want to delete?")) {
      removeBlog(blog);
      history.push("/");
      setNotification(`You deleted ${blog.title}!`, 5);
    }
  };

  const toggleRemove = () => {
    if (blog.user.username === user.username)
      return <button onClick={() => remove(blog)}>remove</button>;
  };

  const handleComment = async () => {
    try {
      const commentToAdd = { id: blog.id, comment: newComment.value };
      await addComment(commentToAdd);
      newComment.reset();
      setNotification("New Comment Added", 4);
    } catch (error) {
      setNotification("Sorry, couldn't submit comment.", 5);
    }
  };

  return (
    <>
      {blog ? (
        <div>
          <h3 id="title">
            {blog.title} by {blog.author}
          </h3>
          <div>
            <p>
              {blog.likes} likes{" "}
              <button onClick={() => vote(blog)}>like</button>
            </p>
            <p>Added by {blog.user.name}</p>
            <p>{toggleRemove()}</p>
            <Form onSubmit={handleComment}>
              <Form.Field>
                <Form.Input
                  {...newComment.omitreset}
                  reset={null}
                  label="Comment"
                />
              </Form.Field>
              <Form.Button type="submit">add comment</Form.Button>
            </Form>
            <h4>Comments</h4>
            <p>
              {blog.comments ? (
                blog.comments.map(comment => <p>{comment.comment}</p>)
              ) : (
                <p>No Comments Yet</p>
              )}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = state => {
  return {
    blogs: state.blogs,
    likes: state.likes,
    notification: state.notification
  };
};

const mapDispatchToProps = {
  addLike,
  removeBlog,
  setNotification,
  addComment
};

Blog = withRouter(Blog);

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
