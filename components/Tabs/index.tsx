import { useState } from "react";

const Tabs: React.FunctionComponent<{
  options: string[];
  className?: string;
  selected: string;
  setSelected: Function;
}> = ({ options, className, selected, setSelected }) => {
  return (
    <div
      className={`${className} flex gap-x-8 text-[#0860C6] cursor-pointer text-2xl font-bold justify-center`}
    >
      {options.map((option) => (
        <div
          key={option}
          onClick={() => setSelected(option)}
          className={`hover:text-[#26B9F1] hover:border-[#DBDFE8] border rounded-t-[20px] p-4 ${
            selected === option && "text-[#26B9F1]"
          }`}
        >
          {option}
        </div>
      ))}
    </div>
  );
};
export default Tabs;
