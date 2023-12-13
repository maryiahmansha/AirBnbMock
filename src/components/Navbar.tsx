import React from 'react'
import logo from './../graphics/logo.png'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center shadow-md mb-5">
            <div className="flex items-center">
                <img src={logo} className="ml-6" style={{ width: 150, height: 150 }} />
            </div>
        </nav>
    )
}

export default Navbar
