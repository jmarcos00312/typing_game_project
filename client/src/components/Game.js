import React, { useState, useEffect } from 'react'
import './game.css'
import Result from '../components/Result'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


function Game({ time, inputValue, setInputValue, wrongResults, setWrongResults, start, correctResults, setCorrectResults, userInfo, setUserInfo }) {
    const [words, setWords] = useState([])
    const [currentWord, setCurrentWord] = useState('')

    let randomWord = Math.floor(Math.random() * words.length)

    useEffect(() => {
        fetch("https://random-word-api.herokuapp.com/word?number=100")
            .then((r) => r.json())
            .then((word) => {
                setWords(word)
                setCurrentWord(word[randomWord])
                setUserInfo({ ...userInfo, score: score })
            });
    }, []);

    let score = (correctResults.length * 10) - (wrongResults.length * 5)


    const check_input_if_match = () => {
        if (inputValue.trim() === currentWord) {
            setCorrectResults([...correctResults, inputValue])
            return
        }
        else {
            setWrongResults([...wrongResults, inputValue])
        }
        setInputValue("")
    }

    const handleInputValue = (e) => {
        if (e.charCode === 13 && inputValue.trim() !== '') {
            check_input_if_match()
            setCurrentWord(words[randomWord])
            setInputValue("")
            setUserInfo({ ...userInfo, score: score })
            console.log(userInfo)
        }
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)

    }

    return (
        <div className="game-container">
            {/* <div> */}
            <div className="input-word-display">
                {/* <h3 className="currentword">{start && currentWord}</h3> */}
                <h3 className="currentword">{currentWord}</h3>
            </div>
            <h1 id="score">Score: {userInfo.score}</h1>
            <h1 id="time-left">{time}</h1>
            <label className="type-label">Type Guess:</label>
            <input
                className="input-guess"
                type="text"
                disabled={!start}
                onKeyPress={e => handleInputValue(e)}
                value={inputValue}
                onChange={(e) => handleChange(e)}
                placeholder={start ? "Click to start" : "Start Typing..."}
                />
              
            <Result
                correctResults={correctResults}
                wrongResults={wrongResults}
            />
        </div>
    )
}

export default Game