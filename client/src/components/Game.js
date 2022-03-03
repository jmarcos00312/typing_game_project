import React, { useState, useEffect } from 'react'
import './game.css'
import Result from '../components/Result'

function Game({ start, setStart, time, correctResults, setCorrectResults, userInfo, setUserInfo }) {
    const [currentWord, setCurrentWord] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [wrongResults, setWrongResults] = useState([])

    let randomWord = Math.floor(Math.random() * 100)

    useEffect(() => {
        fetch("https://random-word-api.herokuapp.com/word?number=100")
            .then((r) => r.json())
            .then((word) => {
                setCurrentWord(word[randomWord])
            });
    }, [correctResults || wrongResults]);




    // console.log(generateWord)
    const check_input_if_match = () => {
        if (inputValue.trim() === currentWord) {
            setCorrectResults([...correctResults, inputValue])
            setUserInfo(userInfo.score + 10)
            return
        }
        else {
            setWrongResults([...wrongResults, inputValue])
            setUserInfo(userInfo.score + 5)
            console.log(userInfo.score)
        }
        setInputValue("")
    }

    const handleInputValue = (e) => {
        if (e.charCode === 13 && inputValue.trim() !== '') {
            check_input_if_match()
            setInputValue("")
        }
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    //TODO: stop time when it reach 0
    //TODO: display result
    //TODO: display stats on results
    console.log(userInfo);
    return (
        <div className="game-container">
            <div>
                <div className="input-word-display">
                    <h3>{start && currentWord}</h3>
                    {/* {<h3 id="word-display">{currentWord}</h3>} */}
                </div>
                <h1>Score: {userInfo.score}</h1>

                <input
                    type="text"
                    disabled={!start}
                    onKeyPress={e => handleInputValue(e)}
                    value={inputValue}
                    onChange={(e) => handleChange(e)}
                    placeholder={start ? "Click to start" : "Start Typing..."}
                />
                <Result correctResults={correctResults} wrongResults={wrongResults} time={time} userInfo={userInfo} setUserInfo={setUserInfo} />
            </div>

        </div>
    )
}

export default Game