import './styles.scss';

// Routing
import { Link } from 'react-router-dom';

// Interfaces
import { ICartManager } from './definition';

// Mui
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

// Calling Cloud Functions
import axios from 'axios';

function Checkout(props: ICartManager) {
    // Send in a checkout request with cart items
    const checkout = async () => {
        try {
            // Send items to cloud function
            console.log(props.cart.map((item) => item));
            const results = await axios.post('https://us-central1-trippy-hippy69.cloudfunctions.net/createStripeCheckout', {items: [...props.cart]})
            window.location.href = results.data.url;  // load stripe checkout with items we sent in
          } catch (err) {
            console.log({err});
          }
    }

    return (
        <div className='cart'>
            <script src='../../../functions/lib/index.js'/>
            <div className='container'>
            { props.cart.length > 0 ? ( <> {
                props.cart.map((item, i) => (
                    <div key ={i} className='items'>
                        <div className='items__item'>
                            { item.image ?
                                <img
                                    src={item.image}
                                    className='items__item__image'
                                ></img>
                            : null }
                            <div className='items__item__details'>
                                <h2 className='items__item__details__name'>{item.name}</h2>
                                <div className='items__item__details__desc'>{item.description ? item.description : ""}</div>
                                <p className='items__item__details__totalPrice'>${item.price * item.quantity}</p>
                                <p className='items__item__details__price'>${item.price} / ea</p>
                            </div>

                            <div className='items__item__quantity'>
                                <RemoveCircleIcon onClick={() => props.DelFromCart(i)} className='items__item__quantity__del'></RemoveCircleIcon>
                                <div className='items__item__quantity__current'>{item.quantity}</div>
                                <AddCircleIcon 
                                    onClick={() => props.AddToCart({name: item.name, price: item.price, quantity: 1, image: item.image})}
                                    className='items__item__quantity__add'
                                ></AddCircleIcon>
                            </div>
                        </div>
                    </div>
                ))} (
                    <div className='cart__btnContainer'>
                        <button id="checkout-button" className='cart__checkout' onClick={() => checkout()}>Checkout</button>
                    </div></>
                ) : (
                    <div className='cart__empty'>
                        <Link to='/products'>
                            <button className='cart__empty__btn'>Explore Products</button>
                        </Link>
                        <Link to='/services'>
                            <button className='cart__empty__btn'>Add Services</button>
                        </Link>
                        {/* <Link to='/courses'>
                            <button className='cart__empty__btn'>Add Courses</button>
                        </Link> */}
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default Checkout;