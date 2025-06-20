const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Total = (props) => {
  return (
    <b>
      total of{' '}
      {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises + props.parts[3].exercises  }
      {' '}exercises
    </b>
  );
}

const Content = (props) => {
  return (
      <div>
        <Part part={props.parts[0]} />
        <Part part={props.parts[1]} />
        <Part part={props.parts[2]} />
        <Part part={props.parts[3]} />
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