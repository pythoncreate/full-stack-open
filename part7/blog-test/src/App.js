import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Container } from "semantic-ui-react";
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";
import AddBlog from "./components/NewBlog";
import User from "./components/User";
import Navbar from "./components/Navbar";
import CreateUser from "./components/NewUser";
import Users from "./components/Users";
import Notification from "./components/Notification";
import Login from "./components/LoginForm";
import blogService from "./services/blogs";
import { initializeBlogs } from "./reducers/blogReducer";
import { initializeUsers } from "./reducers/userReducer";
import { setNotification } from "./reducers/notificationReducer";
import { fetchUser, setUser, logout, login } from "./reducers/loginReducer";

// const blogFormRef = React.createRef();

const App = props => {
  const loadBlogs = props.initializeBlogs;
  const loadUsers = props.initializeUsers;
  const fetchUser = props.fetchUser;

  useEffect(() => {
    loadBlogs();
  }, [loadBlogs]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      props.setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const blogById = id => props.blogs.find(a => a.id === id);
  const userById = id => props.users.find(a => a.id === id);

  return (
    <Container>
      <Router>
        <Notification />
        <div>
          <Navbar />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            {props.loggedUser && (
              <React.Fragment>
                <Route exact path="/">
                  <Blogs />
                </Route>
                <Route exact path="/blogs">
                  <Blogs />
                </Route>
                <Route exact path="/newblog">
                  <AddBlog />
                </Route>
                <Route
                  exact
                  path="/blogs/:id"
                  render={({ match }) => (
                    <Blog
                      blog={blogById(match.params.id)}
                      user={props.loggedUser}
                      history={props.history}
                    />
                  )}
                />
                <Route exact path="/users">
                  <Users />
                </Route>
                <Route
                  exact
                  path="/users/:id"
                  render={({ match }) => (
                    <User user={userById(match.params.id)} />
                  )}
                />
              </React.Fragment>
            )}
            <Route exact path="/newuser">
              <CreateUser />
            </Route>
            <Redirect to="/login">
              <Login />
            </Redirect>
            )}
          </Switch>
        </div>
      </Router>
      <div>
        <br />
        <em>Blog app, Chris Stuart 2019</em>
      </div>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    blogs: state.blogs,
    loggedUser: state.loggedUser,
    users: state.users,
    filter: state.filter,
    search: state.search,
    notification: state.notification
  };
};

const mapDispatchToProps = {
  setNotification,
  initializeBlogs,
  initializeUsers,
  fetchUser,
  setUser,
  logout,
  login
};

App.propTypes = {
  loggedUser: PropTypes.object,
  fetchUser: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  initializeBlogs: PropTypes.func.isRequired,
  initializeUsers: PropTypes.func.isRequired,
  blogs: PropTypes.array,
  users: PropTypes.array,
  setNotification: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
