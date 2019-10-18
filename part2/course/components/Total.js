import React from "react";

const Total = ({ parts }) => {
  //   let total = 0;
  //   parts.forEach(item => {
  //     total += item.exercises;
  //   });

  const total = parts.reduce((a, b) => {
    return a + b.exercises;
  }, 0);

  return <h1>total of {total} exercises</h1>;
};

export default Total;
