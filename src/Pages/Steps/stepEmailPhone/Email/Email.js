import Card from "../../../../Layouts/Card";
import classes from "../StepEmailPhone.module.css";
import TextInput from "../../../../Layouts/TextInput";
import Button from "../../../../Layouts/Button";
import { useState } from "react";
const Email = (props) => {
  const [email, setEmail] = useState("");
  return (
    <Card heading="Enter your email id" type="email">
      <TextInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></TextInput>
      <div>
        <div className={classes.actionButtonWrap}>
          <Button name="Next" onClickHandler={props.onClickHandler} />
        </div>
        <p className={classes.bottomParagraph}>
          By entering your number, you’re agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </div>
    </Card>
  );
};
export default Email;
