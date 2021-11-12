import { useState } from 'react';


const StatisticLine = ({ text, value}) => {
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  )
};

const Statistics = ({ stat1, stat2, stat3 }) => {
  
  const stat4 = stat1 + stat2 + stat3;

  const ab = stat1 * 1;
  const ne = stat2 * 0;
  const ba = stat3 * -1;
  const top = ab + ne + ba;

  if (stat1 || stat2 || stat3) {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <StatisticLine text='good' value={stat1}/>
            </tr>
            <tr>
              <StatisticLine text='neutral' value={stat2}/>
            </tr>
            <tr>
              <StatisticLine text='bad' value={stat3}/>
            </tr>
            <tr>
              <StatisticLine text='all' value={stat4}/>
            </tr>
            <tr>
              <StatisticLine text='average' value={top / stat4}/>
            </tr>
            <tr>
              <StatisticLine text='positive' value={stat1 * 100 / stat4}/>
            </tr>
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <h3>No feedback given</h3>
    )
  }
};

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good => good + 1)} text={'good'}/>
      <Button handleClick={() => setNeutral(neutral => neutral + 1)} text={'neutral'}/>
      <Button handleClick={() => setBad(bad => bad + 1)} text={'bad'}/>
      <h1>statistics</h1>
      <Statistics stat1={good} stat2={neutral} stat3={bad}/>
    </div>
  )
}

export default App;
