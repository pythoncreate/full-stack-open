import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateNew from "./CreateNew";
import About from "./About";
import Anecdote from "./Anecdote";
import AnecdoteList from "./AnecdoteList";
import Footer from "./Footer";

const Menu = ({
  anecdotes,
  addNew,
  anecdoteById,
  notification,
  setNotification
}) => {
  const padding = { padding: 5 };

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Router>
        <div>
          <div>
            <Link style={padding} to="/">
              home
            </Link>
            <Link style={padding} to="/anecdotes">
              anecdotes
            </Link>
            <Link style={padding} to="/create">
              create new
            </Link>
            <Link style={padding} to="/about">
              about
            </Link>
          </div>
          {notification ? <p>{notification}</p> : null}

          <Route
            exact
            path="/"
            render={() => <AnecdoteList anecdotes={anecdotes} />}
          />
          <Route
            exact
            path="/anecdotes"
            render={() => <AnecdoteList anecdotes={anecdotes} />}
          />
          <Route
            exact
            path="/anecdotes/:id"
            render={({ match }) => (
              <Anecdote anecdote={anecdoteById(match.params.id)} />
            )}
          />
          <Route
            exact
            path="/create"
            render={() => (
              <CreateNew addNew={addNew} setNotification={setNotification} />
            )}
          />
          <Route exact path="/about" render={() => <About />} />
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default Menu;
