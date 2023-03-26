import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header">
    <div className="logo"><a href="/"><img src="https://cdn-icons-png.flaticon.com/512/45/45896.png" alt="airbus logo" /><span> Airbus</span></a></div>
    <div ><button className="log_in"><a href="/login">LOGIN</a></button></div>
  </div>
  )
}

export default Header