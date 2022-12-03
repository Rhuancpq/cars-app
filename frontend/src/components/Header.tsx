import React from 'react'
import "./Header.css"

function Header() {
  return (
    <header className="app-header">
        <h1 className="app-title">CARS App</h1>
        <div className='login-button'>
            Login
        </div>
    </header>
  )
}

export default Header