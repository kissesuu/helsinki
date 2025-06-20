const Header = (props) => {
  return <h2>{props.course}</h2>
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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const courseLine = courses.map(course => <Course key={course.id} course={course} />);

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courseLine}
    </div>
  );
}

export default App