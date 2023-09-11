import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cart-actions";


let isInitital = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.addToCart);
  const items = useSelector((state) => state.addToCart.items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const show = useSelector((state) => state.isShown.isShown);
  const notification = useSelector((state) => state.isShown.notification);

  useEffect(() => {
    if(isInitital){
      isInitital=false;
      return
    }
    dispatch(sendCartData(cart))
  
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {show && totalQuantity >= 1 && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
