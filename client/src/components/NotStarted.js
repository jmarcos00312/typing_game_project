import React from 'react'
import { useState, useEffect } from 'react'
import './notStarted.css'

function NotStarted() {
    const [scoreLeaders, setScoreLeaders] = useState([])


    useEffect(() => {
        fetch('/users').then(r => r.json()).then(leaders => {
            setScoreLeaders(leaders)
            console.log(leaders)
        })
    }, [])


    // const sortLeaders


    const sortable = Object.fromEntries(
        Object.entries(scoreLeaders).sort((a, b) => a + b)
    );
    console.log(sortable)

    const leaders = scoreLeaders.map(user => {
        if (user.score === null) user.score = 0
        if (user.name === "") user.name = "Some Person"

        return (<h4 key={user.id}>{user.name} - {user.score}</h4>)
    })

    return (
        <div className="leaderboard-container">
            <h1 id="leaderboard">Leaderboards</h1>
            {leaders}
        </div>
    )
}
export default NotStarted