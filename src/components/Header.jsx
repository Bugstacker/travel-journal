import React from "react"
import logo from "../assets/earth.png"
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="earth logo" className="header--logo"/>
      <h3 className="header-text">my travel journal.</h3>
    </div>
  )
}

export default Header