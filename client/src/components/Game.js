import React, { useState, useEffect } from 'react'
import './game.css'


function Game({ start, setStart }) {
    const [words, setWords] = useState([])
    const [currentWord, setCurrentWord] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [correctResults, setCorrectResults] = useState([])
    const [wrongResults, setWrongResults] = useState([])
    const [time, setTime] = useState(30)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    // let single_word = word

    let random_index = Math.floor(Math.random() * words.length)

    useEffect(() => {
        fetch("https://random-word-api.herokuapp.com/word?number=100")
            .then((r) => r.json())
            .then((word) => {

                setWords(word)
                setCurrentWord(words[random_index])
                setIsTimeRunning(prev => !prev)
            });
    }, [start]);

    useEffect(() => {
        if (start && time !== 0) {
            setTimeout(() => setTime(prevTime => prevTime - 1), 1000)
        }
    }, [])
    // console.log(generateWord)
    const check_input_if_match = () => {
        if (inputValue.trim() === currentWord) {
            setCorrectResults([...correctResults, inputValue])
            return
        }
        else {
            setWrongResults([...wrongResults, inputValue])
        }
    }
    const handleInputValue = (e) => {
        if (e.charCode === 13 && inputValue.trim() !== '') {
            check_input_if_match()
            setCurrentWord(words[random_index])
            setInputValue("")
        }

    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const displayCorrect = correctResults.map(item => {
        return (<li>{item}</li>)
    })
    const displayWrong = wrongResults.map(item => {
        return (<li>{item}</li>)
    })
    // runTime()
    // start && setTime(prev => prev--)
    //TODO: display words on start
    //TODO: add time feature
    //TODO: calculate scores
    //TODO: add the word to either correct or wrong array to show the result
    return (
        <div className="game-container">

            <div className="input-word-display">

                <h3 id="word-display">{start && currentWord}</h3>
            </div>
            {/* {runTime()} */}
            {time}
            <input
                type="text"
                disabled={!start}
                onKeyPress={e => handleInputValue(e)}
                value={inputValue}
                onChange={(e) => handleChange(e)}
                placeholder={start ? "" : "Start Typing..."}
            />
            <h3>{time}</h3>
            <ul>correct
                {displayCorrect}
            </ul>
            <ul>Wrong
                {displayWrong}
            </ul>
        </div>
    )
}

export default Game