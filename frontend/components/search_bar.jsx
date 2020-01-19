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
                    setRes(res)
                })
        }
    }

    let displayedUsers = null;
    
    if (searchRes) {
      displayedUsers = Object.values(searchRes)
    }

    let render;

    if (searchRes && displayedUsers && displayedUsers.length) {
      render = (
        <ul className="users-search">
          {
            displayedUsers.map(user => {
              return (
                <Link to={`/${user.value}`} onClick={handleClick} key={user.key}>
                  <li key={user.key}>
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
      )
     } 
    //else if (displayedUsers && !displayedUsers.length && searchVal) {

    //       render = (
    //       <ul className="users-search">
    //         <li>No users found.</li>
    //       </ul>
    //       )

    // } 
    else {
      render = null;
    }

    // let render = displayedUsers ? (
    //     <ul className="users-search">
    //         {
    //             displayedUsers.map( user => {
    //                 return (
    //                   <Link to={`/${user.value}`} onClick={handleClick}>
    //                     <li>
    //                       {
    //                       user.photo ?
    //                       <img
    //                         className="profile-pic-search"
    //                         src={user.photo}
    //                       />
    //                       :
    //                       <img className="profile-pic-search" src="/user.png" />
    //                       }
    //                       {user.value}
    //                     </li>
    //                   </Link>
    //                 );
    //             })
    //         }
    //     </ul>
    // ) : (
        // null
    // )


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