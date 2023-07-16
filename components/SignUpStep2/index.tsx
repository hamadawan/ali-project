import * as React from "react";
import Steps from "../Steps";
import PersonalInformation from "../PersonalInformation";

const SignUpStep2: React.FunctionComponent = () => {
  return (
    <div className="flex justify-center items-center">
        <div className="w-[550px] h-[659px] px-10 py-8 rounded-[20px] bg-[#FFF]">
        <Steps/>
        <PersonalInformation/>
        </div>
    </div>
  );
};

export default SignUpStep2;