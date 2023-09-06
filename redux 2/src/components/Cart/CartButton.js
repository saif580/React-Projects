import { useDispatch, useSelector } from "react-redux";
import { cartShowAction } from "../../store/cartshow";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const items = useSelector((state) => state.addToCart.items);
  let totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const dispatch = useDispatch();
  const cartHandler = () => {
    dispatch(cartShowAction.showCartModal());
  };
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
