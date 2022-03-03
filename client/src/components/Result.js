import React from 'react'

function Result({ correctResults, wrongResults, time, userInfo }) {


  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  };

  // useEffect(() => {

  // }, [])

  const sendScore = (e) => {
    fetch('/users', configObj).then(r => r.json())
  }

  const correct = correctResults.map(item => {
    return <li>{item}</li>
  })


  const wrong = wrongResults.map(item => {
    return <li>{item}</li>
  })
  const score = (correctResults.length * 10) - (wrongResults.length * 5)

  return (
    <div>
      <h1 id="score">{score}</h1>
      <div className="correct">
        <ul><h1>CORRECT</h1>
          {correct}
        </ul>
      </div>
      <div className="wrong">
        <ul> <h1>WRONG</h1>
          {wrong}
        </ul>
      </div>
    </div >
  )
}

export default Result