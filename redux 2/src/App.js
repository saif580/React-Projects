import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const items=useSelector(state=>state.addToCart.items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const show = useSelector((state) => state.isShown.isShown);
  return (
    <Layout>
      {show && totalQuantity>=1 && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
