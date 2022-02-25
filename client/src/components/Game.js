import React, { useState } from 'react'
function Game({ words }) {
    const [currentWord, setCurrentWord] = useState('')
    const [correct, setCorrect] = useState([])
    const [wrong, setWrong] = useState([])
    // let single_word = word




    //TODO: add a for loop that loops thru the array of words to show 1 at a time
    //TODO: add input field to type each words
    //TODO: add the word to either correct or wrong array to show the result
    //need to add a for loop
    const text_field = words.map((word) => {
        setCurrentWord(word)
        return (<h1>{currentWord}</h1>)
    })
    return (
        <div>
            <h3>{text_field}</h3>





        </div>

    )
}

export default Game