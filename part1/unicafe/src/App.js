import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick = {handleClick}>{text}</button>

const Display = ({text, count}) => <div>{text} {count}</div>

const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <table>
      <tbody>
        <tr>
          <td><Display text='good' count={good} /></td>
        </tr>
        <tr>
          <td><Display text='neutral' count={neutral} /></td>
        </tr>
        <tr>
          <td><Display text='bad' count={bad} /></td>
        </tr>
        <tr>
          <td><Display text='all' count={good + bad + neutral} /></td>
        </tr>
        <tr>
          <td><Display text='average' count={(good - bad) / (good + bad + neutral)} /></td>
        </tr>
        <tr>
          <td>  <Display text='positive' count={100 * good / (good + bad + neutral)} /></td>
        </tr>
      </tbody>
    </table>
  )

}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <p><strong>give feedback</strong></p>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />

      <p><strong>statistics</strong></p>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App;
