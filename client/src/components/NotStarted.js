import React from 'react'
import { useState, useEffect } from 'react'

function NotStarted() {
    const [scoreLeaders, setScoreLeaders] = useState([])

    useEffect(() => {
        fetch('/users').then(r => r.json()).then(leaders => {
            console.log(leaders)
            setScoreLeaders(leaders)
        })
    }, [])

    const leaders = scoreLeaders.map(user => {

        if (user.score === null) user.score = 0
        return (<h1>{user.name} - {user.score}</h1>)
    })

    return (
        <div>
            <h1 style={{ color: 'red' }}>Leaderboards</h1>
            {leaders}
        </div>
    )
}
export default NotStarted