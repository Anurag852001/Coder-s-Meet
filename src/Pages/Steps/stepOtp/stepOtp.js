import Card from "../../../Layouts/Card";
import TextInput from "../../../Layouts/TextInput";
import classes from "./StepOtp.module.css";
import Button from "../../../Layouts/Button";
import { useState } from "react";
const StepOtp = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className={classes.container}>
      <Card heading="Enter the code we just texted you" type="lock">
        <TextInput onChange={(e) => setOtp(e.target.value)}></TextInput>
        <div className={classes.actionButtonWrap}>
          <Button name="Next"></Button>
        </div>
        <p className={classes.bottomParagraph}>
          By entering your number, you’re agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </Card>
    </div>
  );
};
export default StepOtp;
