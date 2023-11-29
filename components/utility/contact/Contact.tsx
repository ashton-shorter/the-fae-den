import './styles.scss';
import { useState } from 'react';
import emailjs from 'emailjs-com';

interface IContact {
    name: string;
    email: string;
    subject: string;
    message: string;
}

function Contact() {
    const [contact, setContact] = useState<IContact>({} as IContact);   // Holds contact info
    const [open, setOpen] = useState(true); // Toggles contact window
    const [startFire, setStartFire] = useState(false);  // Lights window on fire

    const handleClose = () => {
        setOpen(false);
    }
    
    function sendEmail(e) {
        e.preventDefault(); // prevent submit from re rendering page

        // Send details through emailjs service
        emailjs.sendForm('service_di42thv', 'template_c0ja4mi', e.target, 'user_C4Bcp5diapTtZEQvHcaHq')
        .then((result) => {
            fire(); // Set window on fire
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    //#region Fire Handling
    let fireParticles: JSX.Element[] = [];   // Use this to map over the fire particles
    let fireSize = 50;  // How big you want it
    let burnDuration = 2950;    // In milliseconds

    // Push x particles into the array
    for( let i = 0; i < fireSize; i++) {
        fireParticles.push(<div key={i} className='particle'></div>);
    }

    // Lights the window on fire
    const fire = () => {
        let ref = document.getElementById('burn');  // Get the element to burn
        setStartFire(true); // State that we are on fire
        if(ref) {   // Did we find the element to burn?
            ref.classList.add('burn');  // Change its class to burn
        }

        setTimeout(() => {
            setStartFire(false);
        }, burnDuration)    // Determine how long it burns for
    }
    //#endregion Fire Handling

    return (
        <>
        {
            open ? (
                <div id='burn' className='popup'>
                    <p className='title'>Inquiry</p>
                    <button className='close' onClick={handleClose}>X</button>

                    <form id='email-form' onSubmit={sendEmail}>
                        <div className='inputs'>
                                <div className='input__container'> 
                                    <p className='input__title'>Name</p>
                                    <input
                                        name='name'
                                        required
                                        className='input'
                                        type='text'
                                        value={contact.name}
                                        onInput={(e: any) => setContact({...contact, name: e.target.value})}
                                    />
                                </div>
                            
                                <div className='input__container'>
                                    <p className='input__title'>Email</p>
                                    <input
                                        name='email'
                                        required
                                        className='input'
                                        type='email'
                                        value={contact.email}
                                        onInput={(e: any) => setContact({...contact, email: e.target.value})}
                                    />
                                </div>

                                <div className='input__container'>
                                    <p className='input__title'>Subject</p>
                                    <input
                                        name='subject'
                                        required
                                        className='input'
                                        type='text'
                                        value={contact.subject}
                                        onInput={(e: any) => setContact({...contact, subject: e.target.value})}
                                    />
                                </div>
                        </div>
                        
                        <div className='message'>
                                <p className='message__title'>Message</p>
                                <textarea
                                    name='message'
                                    required
                                    className='message__input'
                                    value={contact.message}
                                    onInput={(e: any) => setContact({...contact, message: e.target.value})}
                                />
                        </div>
                        
                        <button onSubmit={sendEmail} className='submit'>Send</button>
                    </form>

                    {
                        startFire ? (
                            <div className='fire' >
                                {fireParticles.map((_particle, i) => (
                                    <div key={i} className='particle'></div>
                                ))}
                            </div>
                        ) : null
                    }
                </div>
        ) : null }
    </>
    )
}

export default Contact;