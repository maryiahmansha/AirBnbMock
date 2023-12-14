import React from 'react'
import SportsPhoto from './../graphics/KatieImg.png'
import WeddingPhoto from './../graphics/wedding-photography.png'
import BikePhoto from './../graphics/mountain-bike.png'

const Card = () => {
    return (
        <div className='flex'>
            <div className='p-5'>
                <img src={SportsPhoto} style={{ width: 350 }} className='p-8' />
                <p className='pl-5'>Life lessons with Katie Zaferes</p>
                <p className='pl-5 font-black'>From $136 / person</p>
            </div>
            <div className='p-5'>
                <img src={WeddingPhoto} style={{ width: 350 }} className='p-8' />
                <p className='pl-5'>Learn wedding photography</p>
                <p className='pl-5 font-black'>From $125 / person
                </p>
            </div>
            <div className='p-5'>
                <img src={BikePhoto} style={{ width: 350 }} className='p-8' />
                <p className='pl-5'>Group Mountain Biking</p>
                <p className='pl-5 font-black'>From $50 / person</p>
            </div>
        </div>
    )
}

export default Card
