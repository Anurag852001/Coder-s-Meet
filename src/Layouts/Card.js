import logo from "../Assets/images/logo.png";
import classes from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={classes.cardWrapper}>
      <div className={classes.card}>
        <div className={classes.headingWrapper}>
          <img src={logo} alt="logo"></img>
          <h1 className={classes.heading}>{props.heading}</h1>
        </div>
        {props.children}
      </div>
    </div>
  );
};
export default Card;
