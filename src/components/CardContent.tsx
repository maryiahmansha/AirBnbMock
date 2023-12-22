import React from 'react'

interface CardComponentProps {
    photo: string;
    title: string;
    costDesc: string;
}

const CardContent: React.FC<CardComponentProps> = ({ photo, title, costDesc }) => {
    return (

        <div className='p-5'>
            <img src={photo} style={{ width: 350 }} className='p-8' />
            <p className='pl-5'>{title}</p>
            <p className='pl-5 font-black'>{costDesc}</p>
        </div>

    )
}

export default CardContent
