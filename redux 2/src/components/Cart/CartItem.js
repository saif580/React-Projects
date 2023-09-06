import { useDispatch, useSelector } from 'react-redux';
import classes from './CartItem.module.css';
import { addToCartActions } from '../../store/addtocart';

const CartItem = (props) => {
  const { title, price } = props.item;
  const quantities=useSelector(state=>state.addToCart.quantity);
  const amount=useSelector(state=>state.addToCart.amount)
  const dispatch=useDispatch();
  const incrementHandler=()=>{
    dispatch(addToCartActions.addItem())
  }
  const decrementHandler=()=>{
    dispatch(addToCartActions.removeItem())
    dispatch(addToCartActions.decreaseAmt(6))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${amount.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantities}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementHandler}>-</button>
          <button onClick={incrementHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
