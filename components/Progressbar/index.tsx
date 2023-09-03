import  React,{useState} from "react";

const Progressbar: React.FunctionComponent<{percentage:number}> = ({percentage}) => {
  return (
    <div className="flex gap-x-2">
      <div className="font-bold text-[#0860C6] text-basse">5</div>
      <div className="w-[960px] h-3 rounded-[100px] bg-[#DBDFE8] mt-2 mb-4">
        <div className="h-full bg-[#FAC77C] rounded-[100px]" style={{width:`${percentage}%`}}></div>
      </div>
      <div className="text-lg font-bold">{percentage}%</div>
    </div>
  );
};

export default Progressbar;
