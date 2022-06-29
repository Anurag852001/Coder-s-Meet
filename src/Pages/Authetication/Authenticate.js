import stepEmailPhone from "../Steps/stepEmailPhone/StepEmailPhone";
import { useState } from "react";
import StepOtp from "../Steps/stepOtp/StepOtp";

const Authenticate = () => {
  const steps = {
    1: stepEmailPhone,
    2: StepOtp,
  };

  const [step, setStep] = useState(1);
  const onClickHandler = () => {
    console.log("pressed");
    setStep(step + 1);
  };
  const Component = steps[step];
  return <Component onClickHandler={onClickHandler}></Component>;
};
export default Authenticate;
