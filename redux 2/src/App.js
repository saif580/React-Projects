import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { cartShowAction } from "./store/cartshow";
import Notification from "./components/UI/Notification";

let isInitital = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.addToCart);
  const items = useSelector((state) => state.addToCart.items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const show = useSelector((state) => state.isShown.isShown);
  const notification = useSelector((state) => state.isShown.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        cartShowAction.showNotification({
          status: "pending",
          title: "Sending",
          message: "Sending cart data",
        })
      );

      const response = await fetch(
        "https://react-http-c23d8-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );
      if (!response.ok) {
        throw new Error("Sending Cart Data Failed.");
      }
      dispatch(
        cartShowAction.showNotification({
          status: "success",
          title: "Success",
          message: "Sending cart data successfully",
        })
      );
    };

    if (isInitital) {
      isInitital = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        cartShowAction.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed",
        })
      );
    });
  }, [cart, dispatch]);
  console.log(notification);

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
