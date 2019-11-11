import React from "react";

const Anecdote = ({ anecdote }) => {
  return (
    <div>
      <h2>{anecdote.content}</h2>
      <p>has {anecdote.votes} votes</p>
      <div>
        for more info see <a href="{anecdote.info}">{anecdote.info}</a>
      </div>
    </div>
  );
};

export default Anecdote;
