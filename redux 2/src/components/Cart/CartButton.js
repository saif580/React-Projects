import { useDispatch, useSelector } from 'react-redux';
import { cartShowAction } from '../../store/cartshow';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const quantity=useSelector(state=>state.addToCart.quantity);
  const dispatch=useDispatch();
  const cartHandler=()=>{
    dispatch(cartShowAction.showCartModal())
  }
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
