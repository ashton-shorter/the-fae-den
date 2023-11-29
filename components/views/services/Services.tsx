import './styles.scss';
import React from 'react';
// Components
import Contact from '../../utility/contact/Contact';
// Interfaces
import { IServiceManager } from './definition';
// MUI
//import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'; // may be added later

function Services(props: IServiceManager) {
    const [popup, setPopup] = React.useState(false);

    const handleInquire = () => {
        console.log("inquire");
        setPopup(!popup);
    }

    return (
        <div className='services'>
            <h1 className='services__title'>ALL services are available virtually!</h1>

            <div className='services__container'>
            {
                props.services.map((service, i) => (
                    i !== props.services.length - 1 ? (
                        <div key={i} className='services__details'>
                            <h4 className='services__header'>{service.name}</h4>
                            <p className='services__description'>{service.desc}</p>
                            <h3 className='services__price'>${service.price}</h3>

                            <button className='services__inquire' onClick={handleInquire}>Inquire</button>

                            {/* {service.group ? (
                                <button className='services__inquire' onClick={handleInquire}>Inquire</button>
                            ) : (
                                <AddShoppingCartIcon 
                                    onClick={() => props.cartManager.AddToCart({name: service.name, price: service.price, quantity: 1})}
                                    className='services__addToCart' sx={{ fontSize: 60 }}
                                />
                            )} */}

                            
                        </div>
                    ) : (
                        // Style last service differently
                        <div key={i} id='services__last__details' className='services__details'>
                            <h4 className='services__header'>{service.name}</h4>
                            <p id='services__last__description' className='services__description'>
                                {service.desc}
                            </p>
                            <h3 className='services__price'>${service.price}</h3>

                            <button className='services__inquire' onClick={handleInquire}>Inquire</button>
                            
                            {/* <AddShoppingCartIcon 
                                onClick={() => props.AddToCart({name: service.name, price: service.price, quantity: 1})}
                                className='services__addToCart} sx={{ fontSize: 60 }}
                            /> */}
                        </div>
                    )
                ))
            }

            {
                popup ? (
                    <Contact />
                ) : (
                    null
                )
            }
            </div>
        </div>
    )
}

export default Services;