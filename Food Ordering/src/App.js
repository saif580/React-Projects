import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App () {
  const [cartIsshown,setCartIshShown]=useState(false)

  const showCartHandler=()=>{
    setCartIshShown(true);
  }

  const hideCartHandler=()=>{
    setCartIshShown(false);
  }

  return (
    <CartProvider>
    {cartIsshown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
