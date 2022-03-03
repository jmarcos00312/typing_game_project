import { useState, useEffect } from 'react'
import './App.css';
import Game from './components/Game'
import NotStarted from './components/NotStarted'
import { useNavigate } from 'react-router-dom'
import UserInfo from './components/UserInfo';




function App() {
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [start, setStart] = useState(false)
  const [time, setTime] = useState(20)
  const [correctResults, setCorrectResults] = useState([])
  const [wrongResults, setWrongResults] = useState([])

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
      // result()
      console.log(userInfo);
    }
  }, [start, time])

  const sendScore = (e) => {
    fetch('/users', configObj).then(r => r.json())
  }

  const start_the_game = () => {
    if (correctResults.length > 0) window.location.reload(false);
    setStart(prev => !prev)
    setIsTimeRunning(prev => !prev)
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
        <Game wrongResults={wrongResults} setWrongResults={setWrongResults} start={start} setStart={setStart} time={time} correctResults={correctResults} setCorrectResults={setCorrectResults} userInfo={userInfo} setUserInfo={setUserInfo} />
        <UserInfo userInfo={userInfo} setUserInfo={setUserInfo} />
        <div className="buttons">
          <button onClick={start_the_game}>{"Play/Re-Play"}</button>
          <button className="submit-score" onClick={sendScore}>Submit Score</button>
        </div>

      </div>
    </div>
  );
}

export default App;
