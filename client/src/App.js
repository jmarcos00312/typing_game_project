import { useState, useEffect } from 'react'
import './App.css';
import Game from './components/Game'
import NotStarted from './components/NotStarted'
import UserInfo from './components/UserInfo';




function App() {
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [start, setStart] = useState(false)
  const [time, setTime] = useState(20)
  const [correctResults, setCorrectResults] = useState([])
  const [wrongResults, setWrongResults] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [userInfo, setUserInfo] = useState({
    name: "",
    score: 0,
  })


  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  };

  useEffect(() => {
    if (time <= 30 && time !== 0 && isTimeRunning) {
      setTimeout(() => setTime(time => time - 1), 1000)
      console.log(userInfo);
      setUserInfo({ ...userInfo, score: (correctResults.length * 10) - (wrongResults.length * 3) })
    } else if (!start) {
      setTime(20);
    } else if (time === 0) {
      setStart(prev => !prev)
      setIsTimeRunning(prev => !prev)
      setWrongResults([...wrongResults, inputValue])
    }
  }, [start, time])

  const sendScore = () => {
    fetch('/users', configObj).then(r => r.json()).then(user => console.log(user))
  }

  const start_the_game = () => {
    setStart(prev => !prev)
    setIsTimeRunning(prev => !prev)
  }
  const Reset = () => <button onClick={restart}>Reset</button>

  const restart = () => {
    window.location.reload()
  }


  return (
    <div className="App">
      <div className="div-title">
        <h1 id="title">Type Racing By: Jeremiah Marcos </h1>
      </div>
      <div className="div-game-container">
        <h3>
          {time}
        </h3>

        {userInfo.name !== "" && <Game setInputValue={setInputValue} inputValue={inputValue} wrongResults={wrongResults} setWrongResults={setWrongResults} start={start} correctResults={correctResults} setCorrectResults={setCorrectResults} userInfo={userInfo} setUserInfo={setUserInfo} />}
        <UserInfo userInfo={userInfo} setUserInfo={setUserInfo} />
        <div className="buttons">
          <reset />
          {correctResults.length ? <Reset /> : <button onClick={start_the_game}>Play</button>}
          <button className="submit-score" onClick={sendScore}>Submit Score</button>
        </div>

      </div>
    </div>
  );
}

export default App;
