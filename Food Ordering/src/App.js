import { Fragment,useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App () {
  const [cartIsshown,setCartIshShown]=useState(false)

  const showCartHandler=()=>{
    setCartIshShown(true);
  }

  const hideCartHandler=()=>{
    setCartIshShown(false);
  }

  return (
    <Fragment>
    {cartIsshown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  )
}

export default App
