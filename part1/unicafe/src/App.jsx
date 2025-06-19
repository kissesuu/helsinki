import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.name}
    </button>
  );
}

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad === 0) {
    return <p>No feedback given</p>
  }

  return (
    <>
      <StatisticLine name="good" value={props.good} />
      <StatisticLine name="neutral" value={props.neutral} />
      <StatisticLine name="bad" value={props.bad} />
      <StatisticLine name="all" value={props.good + props.neutral + props.bad} />
      <StatisticLine name="average" value={((props.good - props.bad) / (props.good + props.neutral + props.bad))} /> 
      <StatisticLine name="positive" value={((props.good / (props.good + props.neutral + props.bad)) * 100) + " %"} /> 
    </>
  );
}

const StatisticLine = (props) => {
  return <p>{props.name} {props.value}</p>
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
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App