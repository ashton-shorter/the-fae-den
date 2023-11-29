import './styles.scss';

import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div className='banner'>
            {/* <video className='video' preload='auto' autoPlay loop muted>
                <source src='videos/mushrooms.mov' />
            </video> */}
            <img className='video' src="images/mushrooms.png" />
            <div className='motto__container'>
                <Link to='/products' className='motto' style={{textDecoration: 'none'}}>
                    <h2>Natural Products</h2>
                </Link>
                <p id='and' className='motto'>&</p>
                <Link to='/services' className='motto' style={{textDecoration: 'none'}}>
                    <h2>Energy Healing</h2>
                </Link>
            </div>
        </div>
    )
}

export default Banner;