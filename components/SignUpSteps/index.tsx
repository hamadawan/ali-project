import * as React from "react";
import Steps from "../Steps";
import UserType from "../UserType";
import PersonalInformation from "../PersonalInformation";

const SignUpSteps: React.FunctionComponent = () => {
  const [step, setStep] = React.useState(1);

  return (
    <div className="flex justify-center items-center">
      <div className="w-[530px] h-[377px] px-10 py-8 rounded-[20px] shadow-[0px 16px 56px 0px rgba(84, 127, 243, 0.10)] bg-[#FFF]">
        <Steps />
        {step === 1 && <UserType setStep={setStep} />}
        {step === 2 && <PersonalInformation />}
      </div>
    </div>
  );
};

export default SignUpSteps;
