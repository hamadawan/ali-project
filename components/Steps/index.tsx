import * as React from "react";
import Step from "../Step";

const Steps: React.FunctionComponent = () => {
  return  <div >
    <div className="h-[2px] bg-[#26B9F1] w-[445px]"/>
    <div className="flex justify-between">
    <Step  finished={<img src="/checkmark.svg" alt="" />} number={1}/>
    <Step finished={<img src="/checkmark.svg" alt="" />} number={2}/>
    <Step finished={<img src="/checkmark.svg" alt="" />} number={3}/>
    </div>
  </div>;
};

export default Steps;