import React, { useState, useEffect } from 'react'
import './userInfo.css'



function UserInfo({ userInfo, setUserInfo }) {
    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            name: userInfo.name
        }


        fetch('http://localhost:3000/', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(userInfo)
        })
            .then(resp => resp.json())
    }



    return (
        <div className="username-input">
            <form className="username-form">

                <label className="username-label">Name:</label>
                <input
                    className="username"
                    name="name"
                    type="text"
                    value={userInfo.name}
                    onChange={handleChange}
                    placeholder="Enter Name here"
                    required
                />
                <input type="submit" className="submit-btn" />
            </form>
        </div>
    )
}

export default UserInfo