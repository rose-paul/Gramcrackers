import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const searchBar = ({users, searchUsers}) => {

    const [searchRes, setRes] = useState(users)
    const node = useRef();

     useEffect(() => {
       document.addEventListener("click", handleOutsideClick);
       return () => {
         document.removeEventListener("click", handleOutsideClick);
       };
     }, []);

     const handleOutsideClick = e => {
         if (node.current.contains(e.target)) {
            return;
         } else {
             setRes({})
             const el = document.querySelector('.search');
             el.value = ""
         }
     }

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
      <div ref={node}>
        <input
          className="search"
          type="text"
          ref={node}
          placeholder="Search"
        //   onClick={focusRef}
          onChange={filter}
        />
        {render}
      </div>
    );

   
}

export default searchBar;