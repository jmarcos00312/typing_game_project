import React from 'react'
import { useState, useEffect } from 'react'

function NotStarted({ userInfo, setStart, setUserInfo }) {
    const [scoreLeaders, setScoreLeaders] = useState([])

    
    useEffect(() => {
        fetch('/users').then(r => r.json()).then(leaders => {
            setScoreLeaders(leaders)
        })
    }, [])


    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })

    }

    const leaders = scoreLeaders.map(user => {
        if (user.score === null) user.score = 0
        return (<h1 key={user.id}>{user.name} - {user.score}</h1>)
    })

    return (
        <div className="leaderboard-container">
            <h1 style={{ color: 'whitesmoke' }}>Leaderboards</h1>
            {leaders}
            <form>
                <div className="name-div">
                    <label>Name:</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        value={userInfo.name}
                        name="userName"
                        required
                    />
                </div>
            </form>
        </div>
    )
}
export default NotStarted