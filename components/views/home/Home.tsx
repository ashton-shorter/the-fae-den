import './styles.scss';

// Components
import Banner from '../../utility/banner/Banner';
import FeaturedProducts from './featured-products/FeaturedProducts';
import LearnMore from './learn-more/LearnMore';
import Exclusives from './exclusives/Exclusives';

// Interfaces
import { IFeaturedProducts } from './featured-products/definition';


// To better manage props here create pointer methods for each necessary item only

function Home(props: IFeaturedProducts) {
    return (
        <div className='home'>
            <Banner />
            <FeaturedProducts {...props} />
            <LearnMore />
            <Exclusives />
        </div>
    )
}

export default Home;