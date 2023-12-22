import SportsPhoto from './../graphics/KatieImg.png'
import WeddingPhoto from './../graphics/wedding-photography.png'
import BikePhoto from './../graphics/mountain-bike.png'
import CardContent from './CardContent'

const Card = () => {
    return (
        <div className='flex'>
            <CardContent photo={SportsPhoto} title='Life lessons with Katie Zaferes' costDesc='From $136 / person' />
            <CardContent photo={WeddingPhoto} title='Learn wedding photography' costDesc='From $125 / person' />
            <CardContent photo={BikePhoto} title='Group Mountain Biking' costDesc='From $50 / person' />
        </div>
    )
}

export default Card
