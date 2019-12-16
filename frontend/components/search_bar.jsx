import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const searchBar = ({users, searchUsers}) => {

    const [searchRes, setRes] = useState(users)

    const filter = (e) => {
        let searchValue = e.currentTarget.value
        if (searchValue === "") {
            setRes({})
        } else {
            searchUsers(searchValue)
                .then(res => {
                    setRes(res.users)
                })
        }
    }

    let displayedUsers = Object.values(searchRes)

    let render = displayedUsers.length ? (
        <ul className="users-search">
            {
                displayedUsers.map( user => {
                    return (
                      <Link to={`/${user.value}`}>
                        <li>
                          {
                          user.photo ?
                          <img
                            className="profile-pic-search"
                            src={user.photo}
                          />
                          :
                          <img className="profile-pic-search" src="/user.png" />
                          }
                          {user.value}
                        </li>
                      </Link>
                    );
                })
            }
        </ul>
    ) : (
        null
    )


    return (
      <div>
        <input
          className="search"
          type="text"
          placeholder="Search"
          onChange={filter}
        />
        {render}
      </div>
    );

   
}

export default searchBar;