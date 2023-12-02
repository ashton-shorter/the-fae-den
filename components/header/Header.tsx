import './styles.scss';

// Routing
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// MUI
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import Badge from '@mui/material/Badge';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroom } from '@fortawesome/free-solid-svg-icons';

// Interfaces
import { IHeader } from './definition';

const Header = (props: IHeader) => {
    const currentPage = useLocation().pathname; // get current path, what page is this?
    
    const GetStyles = (page: string): string => { // Highlight styling on current page name
        if(currentPage == page) {   // Are we currently on the page being checked?
            if(page == 'cart') { return 'rgb(120, 93, 182)' }   // If it's the cart, I want a different shade of gold
            return 'rgb(255, 220, 88)'; // Otherwise let's make them gold
        }

        return '';  // Otherwise do nothing
    }

    const cartBadgeStyle = {
        "& .MuiBadge-badge": {
          color: 'white',
          fontSize: '18px',
          boxShadow: '-15px 15px 40px rgb(94, 56, 182), -15px 15px 40px rgb(94, 56, 182), -15px 15px 40px rgb(94, 56, 182),  -15px 15px 40px rgb(120, 93, 182)',
          backgroundColor: 'rgb(120, 93, 182)',
          transition: 'all .5s'
        }
    }

    return (
        <div className='header'>
            <div className='header__logo'>
                <Link to='/' style={{textDecoration: 'none', color: GetStyles('/')}}><h1>The Fae Den</h1></Link>
                <Link to='/' style={{textDecoration: 'none', color: GetStyles('/')}}>
                    <AutoFixNormalIcon className='wand' style={{marginLeft: '1vw'}} sx={{ fontSize: 30}}/>
                </Link>
            </div>

            <div className='header__menu'>
                <Link to='products' style={{textDecoration: 'none'}}><p className='header__menu__item' style={{color: GetStyles('/products')}}>Products</p></Link>
                <Link to='services' style={{textDecoration: 'none'}}><p className='header__menu__item' style={{color: GetStyles('/services')}}>Services</p></Link>
                {/*
                <Link to='courses' style={{textDecoration: 'none'}}><p style={{color: GetStyles('/courses')}}>Courses</p></Link>
                <Link to='blog' style={{textDecoration: 'none'}}><p style={{color: GetStyles('/blog')}}>Blog</p></Link>
                */}
                <Link to='support' style={{textDecoration: 'none'}}><p className='header__menu__item' style={{color: GetStyles('/support')}}>Support</p></Link>
                <div className='header__menu__cart'>
                    <Link to='cart' style={{textDecoration: 'none', color: GetStyles('/cart')}} id='header__menu__cart'>
                        <Badge badgeContent={props.cartQuantity} sx={cartBadgeStyle}>
                            <FontAwesomeIcon icon={faBroom} />
                        </Badge>
                    </Link>
                </div>
            </div>

            <div className='header__divider'></div>
        </div>
    )
}

export default Header;