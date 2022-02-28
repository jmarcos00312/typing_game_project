import { useState, useEffect } from 'react'
import './App.css';
import Game from './components/Game'
import NotStarted from './components/NotStarted'






function App() {
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [start, setStart] = useState(false)
  const [time, setTime] = useState(10)





  useEffect(() => {
    if (time <= 30 && time !== 0 && isTimeRunning === true) {
      setTimeout(() => setTime(time => time - 1), 1000)
    } else if (!start) {
      setTime(10);
    } else if (time === 0) {
      setStart(prev => !prev)
      setIsTimeRunning(prev => !prev)
    }
  }, [start, time])


  const start_the_game = () => {

      setStart(prev => !prev)
    setIsTimeRunning(prev => !prev)
  }
  //Todo :fix time when it reaches 0
  // if (time === 0) setStart(prev => !prev)
  return (
    <div className="App">
      <div className="div-title">
        <h1 id="title">Type Racing By: Jeremiah Marcos </h1>
      </div>
      <div className="div-game-container">
        {time}
        <Game start={start} setStart={setStart} time={time} />

        <button onClick={start_the_game}>{start ? "STOP" : "START"}</button>
      </div>
    </div>
  );
}

export default App;
