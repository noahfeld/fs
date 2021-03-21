import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick = {handleClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]



  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const updateVotes = (anecdote) => {
    const copy = [...votes]
    copy[anecdote] += 1
    setVotes(copy)
  }

  console.log(selected)

  return (
    <div>
      <div>
        {anecdotes[selected]}
        <br/>
        has {votes[selected]} votes
      </div>
      <Button handleClick = {() => updateVotes(selected)} text='vote' />
      <Button handleClick = {() => setSelected(Math.floor(Math.random() * anecdotes.length))} text='next anecdote' />
      <div>
        best anecdote of the day
        <br/>
        {anecdotes[votes.indexOf(Math.max(...votes))]}
        <br/>
        has {Math.max(...votes)} votes
      </div>
    </div>
  )
}

export default App;
