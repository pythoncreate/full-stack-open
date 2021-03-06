import ReactDOM from "react-dom";
import React, { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = props => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(
    Array.apply(null, new Array(anecdotes.length)).map(
      Number.prototype.valueOf,
      0
    )
  );

  const handleVote = () => {
    const newVotes = [...votes];
    console.log(votes);
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const maxVotes = Math.max(...votes);
  const index = votes.indexOf(maxVotes);

  const generateRandom = () => {
    const max = anecdotes.length;
    setSelected(Math.floor(Math.random() * Math.floor(max)));
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <span>{props.anecdotes[selected]}</span>
      <div>Has {votes[selected]} votes</div>
      <div>
        <Button handleClick={handleVote} text="vote" />
        <Button handleClick={generateRandom} text="next anecdote" />
      </div>
      <h1>Anecdote with most votes</h1>
      <div>{props.anecdotes[index]}</div>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
