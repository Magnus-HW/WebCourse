import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const Button = ({handleClick, text}) => {
    return(
      <button onClick={handleClick}>
        {text}
      </button>
    )
  }

  const OneStat = ({name, result}) => {
    return(
      <p>{name} {result}</p>
    )
  }

  const Statistic = ({good, neutral, bad}) => {
    if (good===0 && neutral===0 && bad===0) {
      return (
        <p>No feedback given</p>
      )
    }

    return(
      <div>
        <OneStat name="All: " result={good + neutral + bad}/>
        <OneStat name="Average: " result={(1*good+bad*(-1))/(good+neutral+bad)}/>
        <OneStat name="Positive: " result={good/(good+neutral+bad)}/>
      </div>
    )
    
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutural"/>
      <Button handleClick={() => setBad(bad + 1)} text="Bad"/>
      
      <p> Good: {good}</p>
      <p> Neutral: {neutral}</p>
      <p> Bad: {bad}</p>
      <br></br>
      
      <Statistic good={good} neutral={neutral} bad={bad}/>
    </div>

  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)