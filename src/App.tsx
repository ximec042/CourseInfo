const Header = ({ course }: any) => {
  console.log("Course", course);
  return <h1>{course}</h1>;
}
const Part = ({ part, exercises }: any) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Content = ({
  part1,
  exercises1,
  part2,
  exercises2,
  part3,
  exercises3,
}: any) => {
  console.log("part1", part1)
   return (
    <div>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </div>
  );
};
   

const Total = ({ totalExercises } :any) => {
  console.log("total",Total)
  return(
    <p>Number of exercises {totalExercises}</p>

  )
}

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const totalExercises = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />

      <Total totalExercises={totalExercises} />

    </div>
  );
};

export default App;
