import * as React from "react";

const Step: React.FunctionComponent = ({
  finished,
  number,
}: {
  finished: boolean;
  number: number;
}) => {
  return (
    <div>
      {finished ? (
        <div className="w-[30px] h-[30px] flex justify-center items-center bg-[#26B9F1] rounded-[20px]">
          <img className="w-[20px] h-[20px]" src="/checkmark.svg" alt="" />
        </div>
      ) : (
        <div className="w-[30px] bg-white h-[30px] flex justify-center items-center text-[#26B9F1] border border-[#26B9F1] rounded-[20px]">
          {number}
        </div>
      )}
    </div>
  );
};

export default Step;