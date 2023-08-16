import { Fragment } from "react";
import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Ordering</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div>
        <img
          className={classes["main-image"]}
          src={mealsImg}
          alt="Delicious Food"
        />
      </div>
    </Fragment>
  );
};

export default Header;
