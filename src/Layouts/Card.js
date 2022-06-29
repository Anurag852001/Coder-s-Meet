import logo from "../Assets/images/logo.png";
import classes from "./Card.module.css";
import phoneimg from "../Assets/images/phone.png";
import emailimg from "../Assets/images/email-emoji.png";
import lockimg from "../Assets/images/lock-emoji.png";
const Card = (props) => {
  const imgType = {
    home: logo,
    phone: phoneimg,
    email: emailimg,
    lock: lockimg,
  };

  return (
    <div className={classes.cardWrapper}>
      <div className={classes.card}>
        <div className={classes.headingWrapper}>
          <img src={imgType[props.type]} alt="logo"></img>

          <h1 className={classes.heading}>{props.heading}</h1>
        </div>
        {props.children}
      </div>
    </div>
  );
};
export default Card;
