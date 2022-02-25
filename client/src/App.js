import { useState, useEffect } from 'react'
import './App.css';
import Game from './components/Game'
import Result from './components/Result'
import NotStarted from './components/NotStarted'




function App() {
  const [words, setWords] = useState([])
  const [start, setStart] = useState(false)

  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word?number=200")
      .then((r) => r.json())
      .then((word) => setWords(word));
  }, []);


  const start_the_game = () => {
    setStart(prev => !prev)
  }

  const game_starting = <Game words={words} start={start} setStart={setStart} />


  return (
    <div className="App">
      <div className="div-title">
        <h1 id="title">Type Racing By: Jeremiah Marcos </h1>
      </div>
      <div className="div-game-container">

        <Result />
        {/* {start ? game_starting : <NotStarted />} */}
        {game_starting}

        <button onClick={start_the_game}>{start ? "STOP" : "START"}</button>
      </div>
    </div>
  );
}

export default App;
