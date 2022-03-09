import React, { useState, useEffect } from 'react'
import './userInfo.css'



function UserInfo({ userInfo, setUserInfo }) {
    const [formData, setFormData] = useState({
        name: ""
    })
    const handleChange = (e) => {
        setUserInfo({ ...formData, [e.target.name]: e.target.value })
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
            </form>
        </div>
    )
}

export default UserInfo