import * as React from "react";
import Select from "../ui/Select";
import { Button } from "../ui/button";

const ProductInformation: React.FunctionComponent = () => {
  return (
    <div>
        <div className="text-[#170F49] text-[42px] font-bold tracking-[0.42px]">
          Playera de polyester
        </div>
        <div className="mt-6 text-base font-medium uppercase text-[#26B9F1]">
          DE STORE NAME
        </div>
        <p className="mt-7 text-lg font-normal text-[#576D99]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et est
          quam. Duis sit amet imperdiet odio. Donec eget semper lacus, eget
          convallis dolor.
        </p>
        <div className="flex gap-x-[60px] mt-7">
          <div className="text-base font-semibold text-[#26B9F1]">
            2 - 49 Piezas
            <div className="text-2xl font-dark text-[#576D99]">$60.00</div>
          </div>
          <div className="text-base font-semibold text-[#26B9F1]">
            50 - 99 Piezas
            <div className="text-2xl font-dark text-[#576D99]">$55.00</div>
          </div>
          <div className="text-base font-semibold text-[#26B9F1]">
            +100 Piezas
            <div className="text-2xl font-dark text-[#576D99]">$45.00</div>
          </div>
        </div>
        <div className="flex gap-x-6 mt-9">
          <div className="text-[#7D7D7D] text-base font-semibold uppercase text-center pt-3 w-[103px] h-[74px] rounded-[10px] border border-solid border-[#00000033]">
            CANTIDAD
            <Select
              required={true}
              id="cantidad"
              type="number"
              className="border-none"
            />
          </div>
          <div className="text-[#7D7D7D] text-base font-semibold uppercase text-center pt-3 w-[103px] h-[74px] rounded-[10px] border border-solid border-[#00000033] ">
            COLOR
            <Select
              required={true}
              id="color"
              type="text"
              className="border-none"
            />
          </div>
          <div className="text-[#7D7D7D] text-base font-semibold uppercase text-center pt-3 w-[103px] h-[74px] rounded-[10px] border border-solid border-[#00000033]">
            Talla
            <Select
              required={true}
              id="talla"
              type="text"
              className="border-none"
            />
          </div>
          <Button className="w-[270px] h-[73.6px] text-white mb-24">
            Quiero esto
          </Button>
        </div>
    </div>
  );
};

export default ProductInformation;
