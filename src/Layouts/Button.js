import classes from "./Button.module.css";
import arrow from "../Assets/images/arrow-forward.png";
const Button = (props) => {
  return (
    <button className={classes.button} onClick={props.onClickHandler}>
      {props.name}
      <img src={arrow} alt="arrow" className={classes.arrow}></img>
    </button>
  );
};
export default Button;
