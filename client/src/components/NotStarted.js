import React from 'react'
import { useState, useEffect } from 'react'

function NotStarted() {
    const [scoreLeaders, setScoreLeaders] = useState([])


    useEffect(() => {
        fetch('/users').then(r => r.json()).then(leaders => {
            setScoreLeaders(leaders)
        })
    }, [])



    const leaders = scoreLeaders.map(user => {
        if (user.score === null) user.score = 0
        if (user.name === "") user.name = "Some Person"
        return (<h4 key={user.id}>{user.name} - {user.score}</h4>)
    })

    return (
        <div className="leaderboard-container">
            <h1 style={{ color: 'whitesmoke' }}>Leaderboards</h1>
            {leaders}
        </div>
    )
}
export default NotStarted