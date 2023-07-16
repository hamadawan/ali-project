import * as React from "react";
import Steps from "../Steps";
import SignUpField from "../SignUpField"

const SignUpStep1: React.FunctionComponent = () => {
  return (
    <div className="flex justify-center items-center">
        <div className="w-[530px] h-[377px] px-10 py-8 rounded-[20px] shadow-[0px 16px 56px 0px rgba(84, 127, 243, 0.10)] bg-[#FFF]">
        <Steps/>
        <SignUpField/>
        </div>
    </div>
  );
};

export default SignUpStep1;