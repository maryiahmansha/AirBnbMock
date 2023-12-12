import React from 'react'
import logo from './../graphics/logo.png'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 shadow-md">
            <div className="flex items-center">
                <img src={logo} />
            </div>
        </nav>
    )
}

export default Navbar
