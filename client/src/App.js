import { useState, useEffect } from 'react'
import './App.css';
import Game from './components/Game'
import Result from './components/Result'
import NotStarted from './components/NotStarted'






function App() {

  const [start, setStart] = useState(false)




  // console.log(words)
  const start_the_game = () => {
    setStart(prev => !prev)
  }



  return (
    <div className="App">
      <div className="div-title">
        <h1 id="title">Type Racing By: Jeremiah Marcos </h1>
      </div>
      <div className="div-game-container">

        <Result />
        {/* {start ? game_starting : <NotStarted />} */}
        <Game start={start} setStart={setStart} />

        <button onClick={start_the_game}>{start ? "STOP" : "START"}</button>
      </div>
    </div>
  );
}

export default App;
