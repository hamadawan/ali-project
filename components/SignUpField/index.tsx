import * as React from "react";


const Steps: React.FunctionComponent = () => {
  return (
    <div className="w-[450px] mb-2">
      <div className="mb-[10px] mt-[10px] w-full  text-center font-[Raleway] text-[32px] font-bold leading-[43px] text-[#170F49]">
        Selecciona el tipo de cuenta
      </div>
      <div className="text-center font-[Roboto] text-sm font-normal leading-[21px] text-[#576D99]">
        Lorem Ipsum dolor sit amet.
      </div>
      <div className="mt-8 text-sm font-bold leading-[22px] font-[Raleway]">
       <button className="mr-[19px] w-[208px] h-[82px] px-[71px] py-[30px] bg-[#26B9F1] rounded-[8px] text-[#FFF] "> 
        Vendedor
      </button>
      <button className="w-[208px] h-[82px] px-[71px] py-[30px] rounded-[8px] text-[#170F49] border border-solid bordert-[#D2DAE2] ">
        Comprador
      </button>
      </div>
      <button className="mt-8 w-full px[48px] py-[16px] rounded-[8px] bg-[#0860C6] font-[Roboto] text-sm font-medium leading-[21px] text-[#FFF]">
        Siguiente
      </button>
    </div>
  );
};

export default Steps;