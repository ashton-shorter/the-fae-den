import './styles.scss';

// Routing
import { Link } from 'react-router-dom';

// Interfaces
import { IFeaturedProducts } from './definition';

// MUI
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function FeaturedProducts(props: IFeaturedProducts) {
    return (
        <div className='featuredProducts'>
            <div className='featuredProducts__header'>
                Featured Products
            </div>

            <ul className='featuredProducts__list'>
                {
                    props.products.map((product, i) => (
                        <li key={i} className='featuredProducts__list__item'>
                            <div className='featuredProducts__list__item__container'>
                                <img src={product.image} className='featuredProducts__list__item__container__picture'></img>
                                    <div className='featuredProducts__list__item__checkout'
                                         onClick={() => props.AddToCart({name: product.name, price: product.price, quantity: 1, image: product.image})}>
                                            <h3 className='featuredProducts__list__item__price'>${product.price}</h3>

                                            { 
                                                product.title ? 
                                                    <p className='featuredProducts__list__item__title'>{product.title}</p>
                                                : null 
                                            }

                                            <AddShoppingCartIcon 
                                                onClick={() => props.AddToCart({name: product.name, price: product.price, quantity: 1, image: product.image})}
                                                className='featuredProducts__list__item__cart__add' sx={{ fontSize: 35 }}
                                            />
                                    </div>
                                    
                                <p className='featuredProducts__list__item__container__description'>{product.description}</p>
                            </div>

                            
                        </li>
                    ))
                }
            </ul>

            <div className='featuredProducts__exploreProducts__container'>
                <Link to='/products'>
                    <button className='featuredProducts__exploreProducts'>Explore All Products</button>
                </Link>
            </div>
            
        </div>
    )
}

export default FeaturedProducts;