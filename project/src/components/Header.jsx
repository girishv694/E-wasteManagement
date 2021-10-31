import React from 'react'
import {Link } from 'react-router-dom'
import '../css/Header.css'
function Header() {
    return (
        <div className="header">
            {/* links */}
            <Link to="/login">
       <img className="logo"
       src = "https://image.shutterstock.com/image-vector/technology-logo-triangle-pyramid-flow-260nw-1012930519.jpg"
       alt="logo"/>
        </Link>
           
        </div>
    )
}

export default Header
