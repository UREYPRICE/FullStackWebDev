import { useState, useEffect } from "react";
import course from "./components/Course";
const App = () => {
  console.log(course);
  return course.map((course) => (
    <div>
      <Header course={course} />
      {course.parts.map((part) => (
        <Course name={part.name} ex={part.exercises} />
      ))}

      <Total total={course.parts} />
    </div>
  ));
};

const Header = ({ course }) => {
  console.log(course.name);
  return <h1>{course.name}</h1>;
};

const Course = ({ ex, name }) => {
  return (
    <>
      <p>{name}</p>
      <h8>{ex}</h8>
    </>
  );
};

const Total = ({ total }) => {
  const totalex = total.reduce((i, total) => {
    return i + total.exercises;
  }, 0);
  return <h4>Total of {totalex} exercises</h4>;
};

export default App;
