import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as APIUtil from '../util/user_api_util'


const searchBar = () => {

    const [searchRes, setRes] = useState()
    const node = useRef();

     useEffect(() => {
       document.addEventListener("click", handleClick);
       return () => {
         document.removeEventListener("click", handleClick);
       };
     }, []);

     const handleClick = () => {
       const el = document.querySelector('.search');
             setRes({})
             el.value = ""
     }

    const filter = (e) => {

        let searchValue = e.currentTarget.value

        if (searchValue === "") {
            setRes({})
        } else {
            APIUtil.searchUsers(searchValue)
                .then(res => {
                    if (Object.values(res).length) {
                      setRes(res)
                    } else {
                      setRes({1 : {value: "No Users Found."}})
                    }
                })
        }
    }

    let displayedUsers = null;
    
    if (searchRes) {
      displayedUsers = Object.values(searchRes)
    }


    let render;
    
    if (displayedUsers) {
      if (displayedUsers[0] && displayedUsers[0].value === "No Users Found.") {
        render = (
          <ul className="users-search">
            <li id="none-found">No users found :(</li>
          </ul>
        )
      } else {
        render = (
          <ul className="users-search">
              {
                  displayedUsers.map( user => {
                      return (
                        <Link to={`/${user.value}`} onClick={handleClick} key={user.key}>
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
      ) }
      } else {
        
        render = null

      }


    return (
      <div ref={node}>
        <input
          className="search"
          type="text"
          ref={node}
          placeholder="User Search"
          onChange={filter}
        />
        {render}
      </div>
    );

   
}

export default searchBar;