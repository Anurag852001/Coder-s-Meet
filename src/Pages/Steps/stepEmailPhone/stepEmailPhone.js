import { useState } from "react";
import Phone from "./Phone/Phone";
import Email from "./Email/Email";
import classes from "./StepEmailPhone.module.css";
import phoneimg from "../../../Assets/images/phone-white.png";
import emailimg from "../../../Assets/images/mail-white.png";
const StepEmailPhone = (props) => {
  const [state, setState] = useState(1);
  const Component = state == 1 ? Phone : Email;
  return (
    <>
      <div className={classes.cardWrapper}>
        <div>
          <div className={classes.buttonWrap}>
            <button
              className={`${classes.tabButton} ${
                state == 1 ? classes.active : ""
              }`}
              onClick={() => setState(1)}
            >
              <img src={phoneimg} alt="phoneimoji"></img>
            </button>
            <button
              className={`${classes.tabButton} ${
                state == 2 ? classes.active : ""
              }`}
              onClick={() => setState(2)}
            >
              <img src={emailimg} alt="emailimoji"></img>
            </button>
          </div>
          <Component onClickHandler={props.onClickHandler}></Component>
        </div>
      </div>
    </>
  );
};
export default StepEmailPhone;
