import React from 'react'
import photo from './../graphics/KatieImg.png'

const Card = () => {
    return (
        <div className='p-5'>
            <img src={photo} style={{ width: 280 }} className='p-8' />
            <p className='pl-5'>Life lessons with Katie Zaferes</p>
            <p className='pl-5 font-black'>From $136 / person</p>
        </div>
    )
}

export default Card
