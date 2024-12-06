import React from 'react';

const Header = ({ course }) => <h2>{course.name}</h2>;

const Total = ({ parts }) => {
  // let sum = 0;
  // const calculateSum = () => {
  //   parts.map((part) => {
  //     sum += part.exercises;
  //   });
  //   return sum;
  // };

  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      <p>
        <strong>total of {totalExercises} exercises</strong>
      </p>
    </div>
  );
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => {
  // console.log(parts);
  return (
    <div>
      {parts.map((part) => {
        return <Part part={part} key={part.id} />;
      })}
    </div>
  );
};

const Course = ({ courses }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
          </div>
        );
      })}
    </div>
  );
};

export default Course;
