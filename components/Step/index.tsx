import * as React from "react";

const Step: React.FunctionComponent = ( finished , number ) => {
  return <div>{finished ? <div className="w-[30px] h-[30px] bg-[#26B9F1] rounded-[20px]"><img src="/checkmark.svg" alt="" /></div> : <div className="w-[30px] h-[30px] bg-blue-900 rounded-[20px]">{number}</div>}</div>;
};

export default Step;