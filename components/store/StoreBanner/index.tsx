import * as React from "react";
import Image from "next/image";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const StoreBanner: React.FunctionComponent = () => {
  return (
    <div className=' bg-[url("/shutterstock.svg")] h-[512px] bg-no-repeat'>
      <div>
        <div className="pt-[97px] text-[64px] font-[bold] leading-[64px] text-[#FFFFFF]">
          HS Uniforms
        </div>
        <div className="flex mt-6 font-[Roboto] text-3xl font-dark leading-[42px] text-[#FFFFFF]">
          4.75
          <Image className="ml-2" src="/stars.svg" alt="" width={125} height={25} />
        </div>
        <div className="flex">
          <div className="mt-6  text-3xl font-medium leading-normal text-[#FFFFFF]">
            50+
            <div className=" text-lg">Products</div>
          </div>
          <div></div>
          <div className="mt-6 ml-24  text-3xl font-medium leading-normal text-[#FFFFFF]">
            100+
            <div className=" text-lg">Customers</div>
          </div>
        </div>
        <div className="flex">
          <Button className="text-[#FFF] tracking-[0.16px] font-[Roboto] text-base font-semibold bg-[#26B9F1] w-[270px] h-[73px] rounded-[10px] mt-9">
            <Image className="mr-2" src="/message-square.svg" alt="" width={24} height={24} />
            Ver información
          </Button>
          <Input
            className="w-[449px] h-[73.6px] mt-9 ml-5"
            required={true}
            type=""
            name=""
            placeholder="¿Qué estás buscando?"
          />
          <div className="w-[56px] h-[56px] rounded-[12px] bg-[#26B9F1]">
            <Image
              className="mt-[19px] ml-[19px]"
              src="/Search.svg"
              alt=""
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreBanner;
