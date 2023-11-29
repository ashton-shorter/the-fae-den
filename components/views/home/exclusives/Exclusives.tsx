import './styles.scss';

// Routing
import { Link } from 'react-router-dom';

function Exclusives() {
    return (
        <div className='exclusives'>
            <div className='exclusives__details'>
                <h2 className='exclusives__details__header'>Join the Trippy Tribe!</h2>
                <Link to='/support'>
                    <button className='exclusives__details__btn'>Learn More</button>
                </Link>
            </div>
        </div>
    )
}

export default Exclusives;