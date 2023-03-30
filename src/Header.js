import React from 'react'
import './Header.css'
import { useDispatch, useSelector } from "react-redux";
import {login, logout} from "./features/userSlice.js";
import { getAuth } from "firebase/auth";
import { selectUser } from "./features/userSlice";


function Header() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const auth = getAuth();

   const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
   }

  return (
    <div className="header">
    <div className="logo">
      <a href="/">
        <img src="https://cdn-icons-png.flaticon.com/512/45/45896.png" alt="airbus logo" />
        <span> Airbus</span>
      </a>
    </div>
    <div className="user-info">
      {user ? (
        <div className='user_name' onClick={logoutOfApp}>Hi, {user.displayName}</div>
      ) : (
        <button onClick={logoutOfApp} className="log_in">Log In</button>
      )}
    </div>
  </div>
  )
}

export default Header