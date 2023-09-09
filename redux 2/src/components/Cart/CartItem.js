import { useDispatch, useSelector } from "react-redux";
import classes from "./CartItem.module.css";
import { addToCartActions } from "../../store/addtocart";

const CartItem = (props) => {
  const items = useSelector((state) => state.addToCart.items);
  const dispatch = useDispatch();
  const incrementHandler = (itemId) => {
    dispatch(
      addToCartActions.addItem({
        id: itemId,
      })
    );
  };
  const decrementHandler = (itemId) => {
    dispatch(
      addToCartActions.removeItem({
        id: itemId,
      })
    );
    
  };

  return (
    <>
      {items.map((item) => (
        <li className={classes.item} key={item.id}>
          <header>
            <h3>{item.title}</h3>
            <div className={classes.price}>
              ${Number(item.totalAmount).toFixed(2)}{" "}
              <span className={classes.itemprice}>(${item.price.toFixed(2)}/item)</span>
            </div>
          </header>
          <div className={classes.details}>
            <div className={classes.quantity}>
              x <span>{item.quantity}</span>
            </div>
            <div className={classes.actions}>
              <button onClick={() => decrementHandler(item.id)}>-</button>
              <button onClick={() => incrementHandler(item.id)}>+</button>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default CartItem;
