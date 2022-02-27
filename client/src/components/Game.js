import React, { useState, useEffect } from 'react'
import './game.css'
import useInterval from '../customHooks/intervals'
import Result from '../components/Result'

function Game({ start, setStart }) {
    const [words, setWords] = useState([])
    const [currentWord, setCurrentWord] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [correctResults, setCorrectResults] = useState([])
    const [wrongResults, setWrongResults] = useState([])
    const [time, setTime] = useState(30)

    // let single_word = word

    let random_index = Math.floor(Math.random() * words.length)


    useEffect(() => {
        fetch("https://random-word-api.herokuapp.com/word?number=100")
            .then((r) => r.json())
            .then((word) => {
                setWords(word)
                setCurrentWord(words[random_index])
            });
    }, [start]);




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
    //TODO: stop time when it reach 0
    //TODO: display result
    //TODO: display stats on results
    //TODO: calculate scores
    return (
        <div className="game-container">

            <div className="input-word-display">

                <h3 id="word-display">{start && currentWord}</h3>
            </div>
            {/* {runTime()} */}
            <input
                type="text"
                disabled={!start}
                onKeyPress={e => handleInputValue(e)}
                value={inputValue}
                onChange={(e) => handleChange(e)}
                placeholder={start ? "" : "Start Typing..."}
            />
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