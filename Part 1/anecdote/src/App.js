import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later.',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remianing 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];

  const [selected, setSelected] = useState(0);
  const selectFunc = () => {
    let num = Math.round(Math.random() * 6);
    setSelected(select => select = num);
  };
  const [votes, setVote] = useState(new Array(7).fill(0));

  const voteFunc = () => {
    setVote(votes => votes.map((vote, index) => index === selected ? vote + 1: vote))
  }

  let maxVal = Math.max(...votes);
  console.log(maxVal)
  let maxInd = votes.indexOf(maxVal);
  console.log(maxInd)

  return (
    <div>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        has {votes[selected]} votes
      </div>
      <button onClick={voteFunc}>vote</button>
      <button onClick={selectFunc}>next anecdote</button>
      <h1>Anecdote with most votes</h1> 
      <p>{anecdotes.map((ele, ind) => ind === maxInd ? ele : null)}</p>
      <p>{`has ${maxVal} votes`}</p>
    </div>
  )
}


export default App;
