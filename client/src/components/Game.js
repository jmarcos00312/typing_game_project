import React, { useState, useEffect } from 'react'
import './game.css'


function Game({ words, start, setStart }) {
    const [currentWord, setCurrentWord] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [correctResults, setCorrectResults] = useState([])
    const [wrongResults, setWrongResults] = useState([])
    const [time, setTime] = useState(30)
    // let single_word = word
    let random_index = Math.floor(Math.random() * words.length)

    const newWord = () => {
        return start && setCurrentWord[random_index]
    }

    start && newWord()


    const check_input_if_match = () => {
        if (inputValue.trim() === currentWord) {
            setCorrectResults([...correctResults, inputValue])
            return
        }
        else {
            setWrongResults([...wrongResults, inputValue])
        }

    }
    // console.log(random_index)


    const handleInputValue = (e) => {
        if (e.charCode === 13 && inputValue.trim() !== '') {
            check_input_if_match()
            setCurrentWord(words[random_index])
            setInputValue("")
            console.log('clicked enter')
        }

    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
        console.log('====================================');
        console.log(inputValue);
        console.log('====================================');
    }

    //TODO: display words on start
    //TODO: add time feature
    //TODO: calculate scores
    //TODO: add the word to either correct or wrong array to show the result
    //need to add a for loop
    const text_field = words.map((word) => {
        // setCurrentWord(word)
        return (<h1>{currentWord}</h1>)
    })
    // console.log(text_field)
    return (
        <div className="game-container">

            <div className="input-word-display">

                <h3 id="word-display">{currentWord}</h3>
            </div>

            <input
                type="text"
                disabled={!start}
                onKeyPress={e => handleInputValue(e)}
                value={inputValue}
                onChange={(e) => handleChange(e)}
                placeholder={start ? "" : "Start Typing..."}
            />

        </div>
    )
}

export default Game