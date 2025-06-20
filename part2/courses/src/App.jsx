const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Total = (props) => {
  const totalExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <b>
      total of{' '}
      {totalExercises}
      {' '}exercises
    </b>
  );
}

const Content = (props) => {
  const parts = props.parts.map(part => <Part key={part.name} part={part} />);
  return (
      <div>
        {parts}
      </div>
  );
}

const Part = (props) => {
  return <p>{props.part.name} {props.part.exercises}</p>;
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
      {
        name: 'Redux',
        exercises: 11
      },
    ]
  }

  return <Course course={course} />
}

export default App