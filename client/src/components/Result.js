import React from 'react'
import "./results.css"



function Result({ correctResults, wrongResults }) {
  const correct = correctResults.map(item => {
    return <li className="every-answer">{item}</li>
  })

  const wrong = wrongResults.map(item => {
    return <li className="every-answer">{item}</li>
  })

  return (
    <div className="results">
      <div className="correct">
        <ul className="header"><h1 className="result-header">CORRECT</h1>
          {correct}
        </ul>
      </div>
      <div className="wrong">
        <ul className="header"> <h1 className="result-header">WRONG</h1>
          {wrong}
        </ul>
      </div>
    </div>
  )
}

export default Result