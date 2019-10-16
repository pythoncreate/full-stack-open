import React from "react";
import ReactDOM from "react-dom";

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = props => {
  return (
    <div>
      {props.partArray.map((el, i) => (
        <Part key={`part-${i}`} part={el.part} exercises={el.exercises} />
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
  const contentText = [
    { part: "Fundamentals of React", exercises: 10 },
    { part: "Using props to pass data", exercises: 7 },
    { part: "State of a Component", exercises: 14 }
  ];

  let total = 0;
  contentText.forEach(item => {
    total += item.exercises;
  });

  return (
    <div>
      <Header course={course} />
      <Content partArray={contentText} />
      <Total exercises={total} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
