import * as React from "react";
import Image from "next/image";
import banner from "../../public/banner.png";

const Breadcrumb: React.FunctionComponent<{ options: string[] }> = ({ options }) => {
  return (
    <div className="text-[#474747] flex gap-x-12 font-[Mukta] text-xs font-normal leading-normal uppercase">
      {options.map((option, index) => {
        return <div key={index}>{option}</div>;
      })}
    </div>
  );
};

export default Breadcrumb;
