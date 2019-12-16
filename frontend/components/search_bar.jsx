import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const searchBar = ({users, searchUsers}) => {

    const [searchRes, setRes] = useState(users)

    const filter = (e) => {
        let searchValue = e.currentTarget.value
        searchUsers(searchValue)
            .then(res => {
                setRes(res.users)
            })
    }

    let displayedUsers = Object.values(searchRes)

    let render = displayedUsers.length ? (
        <ul>
            {
                displayedUsers.map( user => {
                    return <Link to={`/${user.username}`}><li>{user.username}</li></Link>
                })
            }
        </ul>
    ) : (
        <p>No users found :(</p>
    )

    return (
        <div>
            <input className='search' type="text" placeholder="Search" onChange={filter} />
            {render}
        </div>
    )
}

export default searchBar;