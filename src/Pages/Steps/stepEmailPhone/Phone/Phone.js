import Card from "../../../../Layouts/Card";
import classes from "../StepEmailPhone.module.css";
import TextInput from "../../../../Layouts/TextInput";
import Button from "../../../../Layouts/Button";
import { useState } from "react";
const Phone = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const onSubmitHandler = () => {};
  return (
    <Card heading="Enter your phone number" type="phone">
      <TextInput
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      ></TextInput>
      <div>
        <div className={classes.actionButtonWrap}>
          <Button name="Next" onClick={onSubmitHandler}></Button>
        </div>
        <p className={classes.bottomParagraph}>
          By entering your number, you’re agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </div>
    </Card>
  );
};
export default Phone;
