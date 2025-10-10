import pic from '/img/WhatsApp Image 2025-07-30 at 3.06.34 PM.jpeg'
import './index.css';

const Card:React.FC = () => {
    return (

        <div className="card">

            <img className='card-image' src={pic} alt="picture" />
            <h2 className='card-name'>Cezanne P</h2>
            <p>Lawer turned Software Developer</p>

        </div>
        
    )   
}

export default Card;