import React from 'react'
import hero from '../graphics/hero.png'

const Hero = () => {
    return (
        <div>
            <div className='flex items-center justify-center h-25'>
                <img src={hero} className='w-4/5'></img>
            </div>
            <h1>Online Experiences</h1>
            <h2>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h2>
        </div>
    )
}

export default Hero
