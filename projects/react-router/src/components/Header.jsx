import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, logOut } from "../features/session/sessionSlice"
import { NavLink } from 'react-router-dom'
// Import the NavLink component.

export default function Header () {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogout = e => {
    dispatch(logOut())
  }

  const projectFolder = "/projects/react-router";

  // Replace the 4 <a> tags with <NavLink> components
  return (
    <div className="header">
      <NavLink to={`${projectFolder}/about`}>About</NavLink>
      <NavLink to={`${projectFolder}/articles`}>Articles</NavLink>
      <NavLink to={`${projectFolder}/categories`}>Categories</NavLink>
      {
        currentUser.username
          ? <>
              <NavLink to={`${projectFolder}/profile`}>Profile</NavLink>
              <button onClick={handleLogout} className="logout"> Log Out </button>
            </>
          : <NavLink to={`${projectFolder}/sign-up`}>Sign Up</NavLink>
        }
    </div>
  )
}
