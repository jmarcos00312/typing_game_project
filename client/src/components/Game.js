import React, { useState, useEffect } from 'react'
import './game.css'


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
    }, [correctResults || wrongResults]);



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
    // console.log(random_index)


    const handleInputValue = (e) => {
        if (e.charCode === 13 && inputValue.trim() !== '') {
            check_input_if_match()
            setCurrentWord(words[random_index])
            setInputValue("")
        }

    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
        console.log(inputValue);
    }

    const displayCorrect = correctResults.map(item => {
        return (<li>{item}</li>)
    })

    //TODO: display words on start
    //TODO: add time feature
    //TODO: calculate scores
    //TODO: add the word to either correct or wrong array to show the result
    //need to add a for loop

    // console.log(text_field)
    return (
        <div className="game-container">

            <div className="input-word-display">

                <h3 id="word-display">{start && currentWord}</h3>
            </div>

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
        </div>
    )
}

export default Game