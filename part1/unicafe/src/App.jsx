import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.name}
    </button>
  );
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  console.log('good', good)

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" onClick={() => {setGood(good + 1)} }/>
      <Button name="neutral" onClick={() => {setNeutral(neutral + 1)}} />
      <Button name="bad" onClick={() => {setBad(bad + 1)}}/>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {((good - bad) / (good + neutral + bad))}</p>
      <p>positive {((good / (good + neutral + bad)) * 100)} %</p>
    </div>
  )
}

export default App