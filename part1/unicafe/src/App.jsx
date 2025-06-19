import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.name}
    </button>
  );
}

const Statistics = (props) => {
  return (
    <>
    <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.good + props.neutral + props.bad}</p>
      <p>average {((props.good - props.bad) / (props.good + props.neutral + props.bad))}</p>
      <p>positive {((props.good / (props.good + props.neutral + props.bad)) * 100)} %</p>
    </>
  );
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" onClick={() => {setGood(good + 1)} }/>
      <Button name="neutral" onClick={() => {setNeutral(neutral + 1)}} />
      <Button name="bad" onClick={() => {setBad(bad + 1)}}/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App