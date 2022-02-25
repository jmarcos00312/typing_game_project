import { useState, useEffect } from 'react'
import './App.css';
import Game from './components/Game'
import Result from './components/Result'
import NotStarted from './components/NotStarted'




function App() {
  const [words, setWords] = useState([])
  const [start, setStart] = useState(false)

  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word?number=10")
      .then((r) => r.json())
      .then((word) => setWords(word));
  }, []);


  const start_the_game = () => {
    setStart(prev => !prev)
  }

  const game_starting = <Game words={words} />


  return (
    <div className="App">
      <h1>Type Racing Game</h1>
      <h2>Jeremiah Marcos</h2>
      <Result />
      {start ? game_starting : <NotStarted />}
      {/* {start ? game_starting : ""} */}

      <button onClick={start_the_game}>{start ? "STOP" : "START"}</button>
    </div>
  );
}

export default App;
