import React from 'react'
import hero from '../graphics/hero.png'

const Hero = () => {
    return (
        <section>
            <div className='flex items-center justify-center h-25'>
                < img src={hero} className='w-480 m-7 self-center' ></img >
            </div >
            <div>
                <h1 className='text-3xl font-black p-5'>Online Experiences</h1>
                <h2 className='pl-5'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h2>
            </div>
        </section >
    )
}

export default Hero
