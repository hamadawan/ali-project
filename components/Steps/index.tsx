import * as React from "react";
import Step from "../Step";

const Steps: React.FunctionComponent = () => {
  return (
    <div className="relative">
      <div className="h-[2px] bg-[#26B9F1] w-[445px] absolute top-[14px] z-10" />
      <div className="flex justify-between z-20 relative">
        <Step finished={true} number={1} />
        <Step finished={false} number={2} />
        <Step finished={false} number={3} />
      </div>
    </div>
  );
};

export default Steps;
