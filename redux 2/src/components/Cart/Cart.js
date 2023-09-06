import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  return (
    <Card className={classes.cart}>
      <div>
        <h2>Your Shopping Cart</h2>
        <ul>
          <CartItem />
        </ul>
      </div>
    </Card>
  );
};

export default Cart;
