import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  return (
    <Card className={classes.cart}>
      <div>
        <h2>Your Shopping Cart</h2>
        <ul>
          <CartItem item={{ title: "Test Item", price: 6 }} />
        </ul>
      </div>
    </Card>
  );
};

export default Cart;
