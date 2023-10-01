import React from 'react';

const Progressbar: React.FunctionComponent<{ number: number; percentage: number }> = ({
  percentage,
  number,
}) => {
  return (
    <div className="flex w-full items-center gap-x-2">
      <div className="font-bold text-primary min-w-[25px] text-basse">{number}</div>
      <div className="w-full h-3 rounded-[100px] bg-[#DBDFE8]">
        <div
          className="h-full bg-[#FAC77C] rounded-[100px]"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="text-lg font-bold min-w-[40px]">{percentage}%</div>
    </div>
  );
};

export default Progressbar;
