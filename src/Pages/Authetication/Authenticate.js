import stepEmailPhone from "../Steps/stepEmailPhone/stepEmailPhone";
import { useState } from "react";
import stepOtp from "../Steps/stepOtp/stepOtp";

const Authenticate = () => {
  const steps = {
    1: stepEmailPhone,
    2: stepOtp,
  };
  const [step, setStep] = useState(1);
  const Component = steps[step];
  return <Component></Component>;
};
export default Authenticate;
