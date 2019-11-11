import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Notification from "./components/Notification";
import Togglable from "./components/Togglable";
import BlogList from "./components/BlogList";
import LoginForm from "./components/LoginForm";
import BlogForm from "./components/BlogForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import blogService from "./services/blogs";
import loginService from "./services/login";
import { initializeBlogs, createBlog } from "./reducers/blogReducer";
import { setNotification } from "./reducers/notificationReducer";
import { useField } from "./hooks";

const blogFormRef = React.createRef();

const App = props => {
  useEffect(() => {
    props.initalizeBlogs();
  }, [props]);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const [user, setUser] = useState(null);

  const username = useField("text");
  const password = useField("password");
  const title = useField("text");
  const author = useField("text");
  const url = useField("text");

  const loginFormRef = React.createRef();

  const loginForm = () => {
    return (
      <Togglable buttonLabel="login" ref={loginFormRef}>
        <LoginForm
          username={username}
          password={password}
          handleSubmit={handleLogin}
        />
      </Togglable>
    );
  };

  const handleLogin = async event => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username: username.value,
        password: password.value
      });
      window.localStorage.setItem("loggedBlogappUser", JSON.stringify(user));
      blogService.setToken(user.token);
      setUser(user);
      username.reset();
      password.reset();
    } catch (error) {
      setNotification("Sorry wrong username or password.", 5);
    }
  };

  const logout = () => {
    window.localStorage.clear();
    setUser(null);
  };

  // const addBlog = event => {
  //   event.preventDefault();

  //   blogFormRef.current.toggleVisibility();
  //   const blogObject = {
  //     url: url.value,
  //     title: title.value,
  //     author: author.value
  //   };

  //   blogService
  //     .create(blogObject)
  //     .then(data => {
  //       props.createBlog(data);
  //       props.setNotification(
  //         `Success! ${title.value} by ${author.value} was added`,
  //         5
  //       );
  //     })
  //     .catch(error => {
  //       props.setNotification(
  //         `Sorry can't add blog. Here's why: ${error.response.data.error}`,
  //         5
  //       );
  //     });
  // };

  // const removeBlog = blog => {
  //   const confirmDelete = window.confirm(
  //     `remove blog ${blog.title} by ${blog.author}`
  //   );
  //   if (!confirmDelete) return;
  //   blogService.remove(blog).then(() => {
  //     const newBlogs = blogs.filter(b => b.id !== blog.id);
  //     setBlogs(newBlogs);
  //   });
  // };
  // .catch(error => {
  //   setNotification(
  //     `Sorry that blog was already deleted from the phonebook`,
  //     false
  //   );
  //   setBlogs(blogs.filter(item => item.id != blogID));
  // });

  // const showMessage = (message, successNotification = true) => {
  //   setNotification(message);
  //   setSuccess(successNotification);
  //   setTimeout(() => {
  //     setNotification(null);
  //     setSuccess(null);
  //   }, 3000);
  // };

  // const handleBlogChange = e => {
  //   const { name, value } = e.target;
  //   setNewBlog({ ...newBlog, [name]: value });
  // };

  return (
    <>
      <Navbar userinfo={user} />
      <div className="row text-right bg-light pr-5 pt-2">
        {user === null ? (
          ""
        ) : (
          <>
            <div className="col text-right">
              <p>
                Hi {user.name}!. You are currently logged in{" "}
                <button onClick={logout}>logout</button>
              </p>
            </div>
          </>
        )}
      </div>
      <Notification />

      {user === null ? (
        loginForm()
      ) : (
        <>
          <div className="container">
            <div>
              <Togglable buttonLabel="new blog post" ref={blogFormRef}>
                <BlogForm />
              </Togglable>
            </div>
            <div className="row pl-2">
              <div className="col-lg pl-4 pt-3">
                <h2>Blogs</h2>
                <BlogList />
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </>
  );
};

export default connect(
  null,
  { initializeBlogs }
)(App);
