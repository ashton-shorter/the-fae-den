import './styles.scss';

import React, { useState } from 'react';

// Components
import Contact from '../../utility/contact/Contact';

// Interfaces
import { ISupport } from "./definition";

// Firebase
import db from '../../../firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';

// MUI
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

function Support(props: ISupport) {
    // Add these to index if possible
    const [email, setEmail] = useState('');
    const [openAlert, setOpenAlert] = useState(false);
    const [popup, setPopup] = useState(false);
    const [donation, setDonation] = useState(1);

    // Snackbar
    const anchorPos: SnackbarOrigin = {vertical: 'bottom', horizontal: 'left'};

    // Add email to newsletter
    async function addEmail(email: string) {
        // Valid email regex
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(re.test(email)) {    // Is email valid?
            // Check if existing email
            let exists = false;
            const querySnapshot = await getDocs(collection(db, 'emails'));  // Get all emails
            
            querySnapshot.forEach((doc) => {
                if(doc.data().email === email) {    // If this email is already existing
                    exists = true;
                    alert("You're already a part of our newsletter!");
                    return; // Stop here
                }
            })

            if(!exists) { // Otherwise, add it
                try {
                    const docRef = await addDoc(collection(db, 'emails'), { email });
                    console.log("Doc written with id: ", docRef.id);
                    setOpenAlert(true);
                } catch (e) {
                    console.error("Error adding document: ", e);
                    alert('Invalid Email');
                }
            }
        }
    }

    const handleClose = (_event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
    };

    const handleInquire = () => {
        console.log("inquire");
        setPopup(!popup);
    }

    const handleDonate = (event: any) => {
        event.target.value > 0 ? setDonation(Number(event.target.value)) : null;
    }

    const donationMotto = `Help me help you <3`;

    return (
        <div className='support'>
            <div className='support__container'>
                <div className='support__container__exclusives'>
                    <h3 className='support__container__exclusives__title'>Trippy Tribe</h3>
                    <p className='support__container__exclusives__description'>Get early access & exclusive deals</p>
                    <div className='support__container__exclusives__input'>
                        E-mail: <input 
                                    className='support__container__exclusives__email'
                                    type='email'
                                    value={email}
                                    onInput={(e: any) => setEmail(e.target.value)}
                                />
                    </div>
                    <button 
                        className='support__container__exclusives__btn'
                        onClick={() => addEmail(email)}
                    >Join
                    </button>
                </div>

                <img className='fairy' src="gifs/fairy.gif"/>

                <div className='support__container__divider'></div>

                <div className='support__container__advertisement'>
                    <h3 className='support__container__advertisement__title'>Lets Talk Business</h3>
                    <p>Fellow Business Fairy? Promote your product on my page or collaberate with me directly.</p>
                    <button className='support__container__advertisement__btn' onClick={handleInquire}>Contact Me</button>
                </div>

                <div className='support__container__divider'></div>

                <div className='support__container__donate__container'>
                    <div className='support__container__donate'>
                        <h3 className='support__container__donate__title'>Donate</h3>
                        <p>{donationMotto}</p>
                        <div className='support__container__donate__input' >
                            <p className='support__container__donate__input__text'>$</p>
                            <input 
                                className='support__container__donate__amount'
                                type='number'
                                value={donation}
                                onInput={(e: any) => handleDonate(e)}
                            />
                        </div>
                        <button className='support__container__donate__btn'
                                onClick={() => props.AddToCart({name: 'Generous Donation', price: donation, quantity: 1, image: 'images/thirdEyeCrow.jpg'})}>
                                Thank you
                        </button>
                    </div>
                </div>
                <Snackbar 
                    ContentProps={{sx: { 
                        boxShadow: '0 0 10px rgb(94, 56, 182)',
                        borderRadius: '5px',
                        background: 'rgb(94, 56, 182)', 
                        color: 'white',
                        textAlign: 'center',
                        fontSize: '20px',
                        marginBottom: '10px'
                    }}}
                    anchorOrigin={anchorPos}
                    open={openAlert}
                    onClose={handleClose}
                    autoHideDuration={3000}
                    message="Thank you for your support!"
                />
            </div>

            {
                popup ? <Contact /> : null
            }
        </div>
    )
}

export default Support;