import * as React from "react";

const Breadcrumb: React.FunctionComponent<{ options: string[]; className: string }> = ({
  options,
  className,
}) => {
  return (
    <div
      className={`${className} text-[#474747] flex gap-x-12 font-[Mukta] text-xs font-normal leading-normal uppercase`}
    >
      {options.map((option, index) => {
        return <div key={index}>{option}</div>;
      })}
    </div>
  );
};

export default Breadcrumb;
