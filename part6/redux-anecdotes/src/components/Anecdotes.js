import React from "react";
import { connect } from "react-redux";
import Anecdote from "./Anecdote";
import { addVote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const Anecdotes = props => {
  const voteHandler = anecdote => {
    props.addVote(anecdote);
    const notification = `You voted for ${anecdote.content}`;
    console.log("Anecdotes To Show", props.anecdotesToShow);
    props.setNotification(notification, 5);
  };

  return (
    <div>
      {props.anecdotesToShow
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote => (
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() => voteHandler(anecdote)}
          />
        ))}
    </div>
  );
};

const filteredAnecdotes = ({ anecdotes, filter }) => {
  return filter
    ? anecdotes.filter(a => a.content.toLowerCase().includes(filter))
    : anecdotes;
};

const mapStateToProps = state => {
  return {
    anecdotesToShow: filteredAnecdotes(state)
  };
};

const mapDispatchToProps = {
  addVote,
  setNotification
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Anecdotes);
