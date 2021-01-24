import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let all = good + neutral + bad
  let average = (1*good+bad*(-1))/(good+neutral+bad)
  let positive = (good/(good+neutral+bad))*100

  const Button = ({handleClick, text}) => {
    return(
      <button onClick={handleClick}>
        {text}
      </button>
    )
  }

  const OneStat = ({name, result}) => {
    return(
      <tr>
        <td>{name}</td> 
        <td>{result}</td>
      </tr>
    )
  }

  const Statistic = ({good, neutral, bad}) => {
    if (good===0 && neutral===0 && bad===0) {
      return (

          <tr>
            <td>No feedback given</td>
          </tr>

      )
    }

    return(
      <>
        <OneStat name="All: " result={all}/>
        <OneStat name="Average: " result={average.toFixed(2)}/>
        <OneStat name="Positive: " result={positive.toFixed(2) +"%"}/>
      </>
    )
    
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutural"/>
      <Button handleClick={() => setBad(bad + 1)} text="Bad"/>
      <table>
        <tbody>
        <tr>
          <td>Good:</td> 
          <td>{good}</td>
        </tr>
        <tr>
          <td>Neutral:</td> 
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>Bad:</td> 
          <td>{bad}</td>
        </tr>

        <Statistic good={good} neutral={neutral} bad={bad}/>

        </tbody>
      </table>
    </div>

  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)