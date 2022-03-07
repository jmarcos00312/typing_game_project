import React from 'react'
import { useState, useEffect } from 'react'
import './notStarted.css'

function NotStarted() {
    const [scoreLeaders, setScoreLeaders] = useState([])


    useEffect(() => {
        fetch('/users').then(r => r.json()).then(leaders => {
            setScoreLeaders(leaders)
        })
    }, [])


    // const sortLeaders

    scoreLeaders.sort((a, b) => a - b).reverse();

    const leaders = scoreLeaders.map(user => {
        if (user.score === null) user.score = 0
        if (user.name === "") user.name = "Some Person"

        return (<li key={user.id} className="every-users">
            <h3>{user.name}</h3>
            <h5>{user.score}</h5>
        </li>)
    })

    return (
        <div className="leaderboard-container">
            <h1 id="leaderboard">Leaderboards</h1>
            <ol className="users-leaderboard">
                {leaders}
            </ol>
        </div>
    )
}
export default NotStarted