import * as React from "react";
import Image from "next/image";

const ProductSlider: React.FunctionComponent = () => {
  return (
    <div className="flex md:gap-[43px] gap-3">
      <div>
        <div className="w-[280px] h-[363px] rounded-[20px] bg-[#FFFFFF] px-[10px] pt-[43px]">
          <Image src="/shirt-img.svg" alt="" width={260} height={260} />
        </div>
        <div className="mt-3 font-[DM Sans] text-lg font-medium leading-normal text-[#576D99]">
          Product name
        </div>
        <div className="font-[DM Sans] text-lg font-medium leading-normal text-[#1e1e1e80]">
          $60.00 - $120.00
        </div>
      </div>
      <div>
        <div className="w-[280px] h-[363px] rounded-[20px] bg-[#FFFFFF] px-[10px] pt-5">
          <Image src="/shirt-img2.svg" alt="" width={300} height={343} />
        </div>
        <div className="mt-3 font-[DM Sans] text-lg font-medium leading-normal text-[#576D99]">
          Product name
        </div>
        <div className="font-[DM Sans] text-lg font-medium leading-normal text-[#1e1e1e80]">
          $60.00 - $120.00
        </div>
      </div>
      <div>
        <div className="w-[280px] h-[363px] rounded-[20px] bg-[#FFFFFF] px-[10px] pt-7">
          <Image src="/shirt-img3.svg" alt="" width={270} height={308} />
        </div>
        <div className="mt-3 font-[DM Sans] text-lg font-medium leading-normal text-[#576D99]">
          Product name
        </div>
        <div className="font-[DM Sans] text-lg font-medium leading-normal text-[#1e1e1e80]">
          $60.00 - $120.00
        </div>
      </div>
      <div>
        <div className="w-[280px] h-[363px] rounded-[20px] bg-[#FFFFFF] px-[10px] pt-7">
          <Image src="/shirt-img4.svg" alt="" width={280} height={320} />
        </div>
        <div className="mt-3 font-[DM Sans] text-lg font-medium leading-normal text-[#576D99]">
          Product name
        </div>
        <div className="font-[DM Sans] text-lg font-medium leading-normal text-[#1e1e1e80]">
          $60.00 - $120.00
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
