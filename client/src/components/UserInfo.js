import React from 'react'
import './userInfo.css'



function UserInfo({ userInfo, setUserInfo }) {

    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }






    return (
        <div className="username-input">
            <form >
                <label>Name:</label>
                <input
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