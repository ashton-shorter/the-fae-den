import './styles.scss';

function Success() {
    return(
        <div className='container' >
            <video className='video' preload='auto' autoPlay loop muted>
                <source src='videos/success.mov' />
            </video>

            <div className='text__container' >
                <p className='text'>Thank you for your purchase!</p>
                <p className='subText'>A confirmation has been sent to your email :3</p>
            </div>
        </div>
    );
}

export default Success;