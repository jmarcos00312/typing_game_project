import React, { useState } from 'react'
import './game.css'


function Game({ words, start, setStart }) {
    const [currentWord, setCurrentWord] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [correctResults, setCorrectResults] = useState([])
    const [wrongResults, setWrongResults] = useState([])
    const [time, setTime] = useState(30)
    // let single_word = word


    let random_index = Math.floor(Math.random() * words.length)

    console.log(random_index)


    const check_input = () => {

    }

    //TODO: add a for loop that loops thru the array of words to show 1 at a time
    //TODO: add input field to type each words
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
                <h3 id="word-display">{words[random_index]}</h3>
            </div>

            <input
                type="text"
            disabled={!start && !start}
            // onKeyPress={e => handleInput(e)}
            // value={inputValue}
            // onChange={(e) => setInputValue(e.target.value)}
            // placeholder={disabled ? "" : "Start Typing..."}
            />

        </div>
    )
}

export default Game