import './styles.scss';
import React, { useRef } from 'react';

// MUI
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

// Interfaces
import { IProductManager } from './definition';

const Products = (props: IProductManager) => {
    const refs: React.MutableRefObject<HTMLDivElement[]> = useRef<HTMLDivElement[]>([]);  // Array of references to each product category so that we can scroll individually via icons
    refs.current = [];  // Initialize our current element references

    const maxLength = 3;    // Determines whether or not scrolling is needed

    const AddRef = (element: HTMLDivElement) => {   // Add ref to array
        if(element && !refs.current.includes(element)) {    // Ensure element exists, but not already within our array
            refs.current.push(element); // Add element to array
        }
    };

    // Handles offsetting the scrolling pane
    function GetOffset(): number {
        let offset = 1510;

        if(window.innerWidth <= 1900) { offset = 1510; }
        if(window.innerWidth <= 1600) { offset = 1250; }
        if(window.innerWidth <= 1500) { offset = 1150; }
        if(window.innerWidth <= 1400) { offset = 1100; }
        if(window.innerWidth <= 1300) { offset = 1000; }
        if(window.innerWidth <= 1200) { offset = 765; }
        if(window.innerWidth <= 1024) { offset = 695; }
        if(window.innerWidth <= 980) { offset = 680; }
        if(window.innerWidth <= 900) { offset = 645; }
        if(window.innerWidth <= 800) { offset = 600; }
        if(window.innerWidth <= 700) { offset = 615; }
        if(window.innerWidth <= 650) { offset = 560; }
        if(window.innerWidth <= 500) { offset = 615; }
        if(window.innerWidth <= 450) { offset = 566; }
        if(window.innerWidth <= 420) { offset = 536; }
        if(window.innerWidth <= 315) { offset = 508; }
        if(window.innerWidth <= 300) { offset = 502; }

        return offset;
    }

    // Scrolls the pane
    const Scroll = (element: HTMLDivElement, left: boolean) => {  // Scroll element ref by x
        const offset = GetOffset();
        if(element && refs.current.includes(element)) { // Ensure our element exists
            let scrollPos = element.scrollLeft;
            let maxScroll = element.scrollWidth - element.clientWidth - 50;

            if(left) {  // Scroll Left
                if(scrollPos == 0) {    // Has not hit max scroll
                    element.scrollLeft = maxScroll;  // Only scrolls left, pass -x to scroll right
                } else {    // Has hit max scroll
                    element.scrollLeft += -offset;
                }
            } else {   // Scroll Right
                if(scrollPos < maxScroll) {    // Has not hit max scroll
                    element.scrollLeft += offset;  // Only scrolls left, pass -x to scroll right
                } else if(scrollPos >= maxScroll) {    // Has hit max scroll
                    element.scrollLeft = 0;
                }
            }
        }
    };

    return (
        <div className='products'>
            {props.allProducts.map((products, i) => (
                <div key={products.type} className='products__container'>
                    <div className='products__divider__left' />
                    <h3 className='products__category__title'>{products.type}</h3>
                    <div className='products__divider' />
                    {/* Add each ref individually & prime for functionality by back calling the AddRef method in declaration*/}
                    <div 
                        ref={(element: HTMLDivElement) => AddRef(element)}  
                        className='products__category'
                        >
                        {/* Pass in the current reference, element, and scroll by the screen width */}
                        { window.innerWidth > 500 ? (
                            window.innerWidth <= 1500 || products.products.length > maxLength || window.innerWidth <= 1200 ? 
                                <ArrowLeftIcon 
                                    sx={{ fontSize: 200 }}
                                    onClick={() => Scroll(refs.current[i], true)}    
                                    className='products__scroll__left'
                                />
                            : null
                        ): null }

                        { window.innerWidth > 500 ? (
                            window.innerWidth <= 1500 || products.products.length > maxLength || window.innerWidth <= 1200 ?
                                <ArrowRightIcon 
                                    sx={{ fontSize: 200 }}
                                    onClick={() => Scroll(refs.current[i], false)}
                                    className='products__scroll__right'
                                />
                            : null
                        ): null }
                        
                        {products.products.map((product, x) => (
                            x > 0 ? (
                                <div key={x} className='products__category__item'
                                     onClick={() => props.AddToCart({name: product.name, price: product.price, quantity: 1, image: product.image})}>
                                    <div className='products__category__item__content'>
                                        {
                                            product.image ?
                                            <img
                                                    src={product.image}
                                                    className='products__category__item__picture'
                                                ></img>
                                            : null
                                        }
                                        
                                        <p className='products__category__item__description'>{product.description}</p>
                                    </div>
                                    <h3 className='products__category__item__price'>${product.price}</h3>

                                    { 
                                        product.title ? 
                                            <h4 className='products__category__item__title'>{product.title}</h4>
                                        : null 
                                    }
                                    
                                    <AddShoppingCartIcon 
                                        className='products__category__item__cart' sx={{ fontSize: 35 }}/>
                                </div>
                            ) : (
                                <div key={x} className='products__category__description' >
                                    <p className='products__category__description__text'>{product.description}</p>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products