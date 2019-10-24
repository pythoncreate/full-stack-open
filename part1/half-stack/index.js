import React from "react";
import ReactDOM from "react-dom";

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = props => {
  return (
    <div>
      {props.partArray.map((el, i) => (
        <Part key={`part-${i}`} part={el.name} exercises={el.exercises} />
      ))}
    </div>
  );
};

const Part = props => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Total = ({ exercises }) => {
  return <p>Number of exercises {exercises}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a Component", exercises: 14 }
  ];

  let total = 0;
  parts.forEach(item => {
    total += item.exercises;
  });

  return (
    <div>
      <Header course={course} />
      <Content partArray={parts} />
      <Total exercises={total} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
