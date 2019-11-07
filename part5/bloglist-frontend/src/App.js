import React, { useState, useEffect } from "react";
import Notification from "./components/Notification";
import Togglable from "./components/Togglable";
import Blog from "./components/Blog";
import LoginForm from "./components/LoginForm";
import BlogForm from "./components/BlogForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import blogService from "./services/blogs";
import loginService from "./services/login";
import { useField } from "./hooks";

const blogFormRef = React.createRef();

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ url: "", author: "", title: "" });
  const [loginVisible, setLoginVisible] = useState(false);
  const [notification, setNotification] = useState(null);
  const [success, setSuccess] = useState(null);
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const username = useField("text");
  const password = useField("password");

  const sortByLikes = input => {
    input.sort((a, b) => (a.likes > b.likes ? -1 : 1));
    return input;
  };

  useEffect(() => {
    blogService
      .getAll()
      .then(initialBlogs => setBlogs(sortByLikes(initialBlogs)));
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const loginForm = () => {
    const hideWhenVisible = { display: loginVisible ? "none" : "" };
    const showWhenVisible = { display: loginVisible ? "" : "none" };

    return (
      <div className="text-center">
        <div style={hideWhenVisible}>
          <button className="btn-primary" onClick={() => setLoginVisible(true)}>
            Click To Login
          </button>
        </div>
        <div style={showWhenVisible}>
          <LoginForm
            username={username}
            password={password}
            handleSubmit={handleLogin}
          />
          <button onClick={() => setLoginVisible(false)}>cancel</button>
        </div>
      </div>
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
      showMessage("Sorry wrong username or password.", false);
    }
  };

  const addLike = async id => {
    const updatedBlogs = [...blogs];
    const selectedBlogIndex = updatedBlogs.findIndex(b => b.id === id);
    await blogService.updateLikes(id, ++updatedBlogs[selectedBlogIndex].likes);
    setBlogs(sortByLikes(updatedBlogs));
  };

  const logout = () => {
    window.localStorage.clear();
    setUser(null);
  };

  const addBlog = event => {
    event.preventDefault();

    const { url, title, author } = newBlog;
    blogFormRef.current.toggleVisibility();
    const blogObject = {
      url,
      title,
      author
    };

    blogService
      .create(blogObject)
      .then(data => {
        setBlogs(blogs.concat(data));
        showMessage(`Success! ${newBlog.title} by ${newBlog.author} was added`);
        setNewBlog({ url: "", author: "", title: "" });
        // setNewBlog([...newBlog, { url: "", title: "", author: "" }]);
      })
      .catch(error => {
        showMessage(
          `Sorry can't add blog. Here's why: ${error.response.data.error}`,
          false
        );
      });
  };

  const removeBlog = blog => {
    const confirmDelete = window.confirm(
      `remove blog ${blog.title} by ${blog.author}`
    );
    if (!confirmDelete) return;
    blogService.remove(blog).then(() => {
      const newBlogs = blogs.filter(b => b.id !== blog.id);
      setBlogs(newBlogs);
    });
  };
  // .catch(error => {
  //   setNotification(
  //     `Sorry that blog was already deleted from the phonebook`,
  //     false
  //   );
  //   setBlogs(blogs.filter(item => item.id != blogID));
  // });

  const showMessage = (message, successNotification = true) => {
    setNotification(message);
    setSuccess(successNotification);
    setTimeout(() => {
      setNotification(null);
      setSuccess(null);
    }, 3000);
  };

  const handleBlogChange = e => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

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
      <Notification notification={notification} success={success} />

      {user === null ? (
        loginForm()
      ) : (
        <>
          <div className="container">
            <div>
              <Togglable buttonLabel="new blog post" ref={blogFormRef}>
                <BlogForm
                  newBlog={newBlog}
                  addBlog={addBlog}
                  handleBlogChange={handleBlogChange}
                />
              </Togglable>
            </div>
            <div className="row pl-2">
              <div className="col-lg pl-4 pt-3">
                <h2>Blogs</h2>
                {blogs.map(blog => (
                  <Blog
                    blog={blog}
                    addLike={addLike}
                    removeBlog={removeBlog}
                    user={user}
                  />
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

export default App;
