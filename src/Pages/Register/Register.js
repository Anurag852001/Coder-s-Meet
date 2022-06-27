import { useState } from "react";
import stepAvatar from "../Steps/stepAvatar/stepAvatar";
import stepEmailPhone from "../Steps/stepEmailPhone/stepEmailPhone";
import stepOtp from "../Steps/stepOtp/stepOtp";
import stepName from "../Steps/stepName/stepName";
import stepUsername from "../Steps/stepUsername/stepUsername";
const Register = () => {
  const steps = {
    1: stepEmailPhone,
    2: stepOtp,
    3: stepName,
    4: stepAvatar,
    5: stepUsername,
  };
  const [step, setStep] = useState(1);
  const Component = steps[step];
  return <Component></Component>;
};
export default Register;
