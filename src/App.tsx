import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'

// Interfaces
import { ICart, IProduct, IProducts, IService } from '../components/definition';

// Components
import Header from '../components/header/Header';
import Products from '../components/views/products/Products';
import Services from '../components/views/services/Services';
import Support from '../components/views/support/Support';
import Checkout from '../components/views/checkout/Checkout';
import Success from '../components/views/checkout/success/Success';
import Home from '../components/views/home/Home';

// Mock
import { SERVICES, PRODUCTS, FEATUREDPRODUCTS } from '../mock';

interface IApp {
  services: IService[],
  productManager: {
    allProducts: IProducts[],
    featuredProducts: IProduct[]
  };
  cartManager: {
    cart: ICart[],
    totalItems: number
  };
}

function App() {
  const [appState, setAppState] = useState<IApp>({
    services: [...SERVICES],
    productManager: {
      allProducts: [...PRODUCTS],
      featuredProducts: [...FEATUREDPRODUCTS]
    },

    cartManager: {
      cart: [],
      totalItems: 0
    }
  });

  //#region Product Handling
  // const AddProduct = (product: IProduct, index: number): void => {

  // }

  // const RemoveProduct = (index: number): void => {
    
  // }
  //#endregion Product Handling
  //#region Checkout
  const AddToCart = (item: ICart) => {
    let updatedCart = [...appState.cartManager.cart]; // Get current cart
    let updatedTotalItems = appState.cartManager.totalItems;  // update the total items to reflect on badge

    let isExisting = false; // Determines whether to add item or increase quantity

    for( let i = 0; i < updatedCart.length; i++) {  // Check if it's existing, increase quantity if so
      if(updatedCart[i].name === item.name && updatedCart[i].price === item.price) {
        isExisting = true;
        updatedCart[i].quantity += 1;
        updatedTotalItems += 1;
      }
    } 
    
    if(!isExisting) { updatedCart.push(item); updatedTotalItems += item.quantity} // Otherwise add it

    setAppState({
      ...appState,
      cartManager:  {cart: updatedCart, totalItems: updatedTotalItems}
    })
  }

  const DelFromCart = (index: number) => {
    let updatedCart = [...appState.cartManager.cart]; // Get current cart
    let updatedTotalItems = appState.cartManager.totalItems;  // update the total items to reflect on badge

    if(updatedCart[index]) {   // Check if exists and decrease quantity if > 1
      if(updatedCart[index].quantity > 1) {
        updatedCart[index].quantity -= 1;
        updatedTotalItems -= 1
      } else {  // Otherwise remove it
        updatedCart.splice(index, 1);
        updatedTotalItems -= 1;
      }
    }

    setAppState({
      ...appState,
      cartManager:  {cart: updatedCart, totalItems: updatedTotalItems}
    })
  }
  //#endregion

  //#region Props
  const homeProps = {products: [...appState.productManager.featuredProducts], AddToCart};
  const productProps = {allProducts: [...appState.productManager.allProducts], AddToCart};
  const serviceProps = {services: [...appState.services], AddToCart};
  const supportProps = {AddToCart};
  const cartProps = {...appState.cartManager, AddToCart, DelFromCart};
  //#endregion

  return (
    <>
      <Header {...{page: '/', cartQuantity: appState.cartManager.totalItems}} />
      <div>
        <Routes>
          <Route path ='/' element={<Home {...homeProps}/>} />
          <Route path ='/products' element={<Products {...productProps} />} />
          <Route path ='/services' element={<Services {...serviceProps} />} />
          <Route path ='/support' element={<Support {...supportProps} />} />
          <Route path ='/cart' element={<Checkout {...cartProps} />} />
          <Route path ='/success' element={<Success />} />
        </Routes>
      </div>
    </>
  )
}

export default App;