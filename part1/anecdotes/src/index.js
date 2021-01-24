import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {

  
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState([0, 0, 0, 0, 0, 0])
  


  const Button = ({clickHandler, text}) => {
    return (
      <button onClick={clickHandler}>
        {text}
      </button>
    )
  }

  const getRand =() => {
    setSelected(Math.floor(Math.random() * (anecdotes.length - 0) + 0))
    return{
      selected
    }
  }

  const giveVote = () => {
    const newVotes = [
      ...votes
    ]
    newVotes[selected]+=1
    //votes[selected]+1)
    setVote(newVotes)
  }


  const BestAnec= () => {
    let a = 0
    var i
    var v
    for (i=0; i<anecdotes.length; i++){
      if (votes[i]>a) {
        a=votes[i]
        v=i
      }
    }
    
    return (
      <>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[v]}</p>
      </>
    )
  }
  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      
      <p> Has {votes[selected]} votes</p>
      
      <Button clickHandler={giveVote} text="vote"/>
      <Button clickHandler={getRand} text="next anecdote"/>
      

      <BestAnec />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)