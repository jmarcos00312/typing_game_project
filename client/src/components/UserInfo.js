import React from 'react'

function UserInfo({ userInfo, setUserInfo }) {
    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
        console.log(userInfo)
    }
    return (
        <div>
            <form onSubmit={handleChange}>
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