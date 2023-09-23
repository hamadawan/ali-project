import * as React from "react";
import Image from "next/image";
import { Button } from "../../ui/button";
import StarRating from "@/components/StatRating/StarRating";

const StoreInfo: React.FunctionComponent<{ manufacturer: any; className?: string }> = ({
  manufacturer,
  className,
}) => {
  return (
    <div className={`${className} container mx-auto grid grid-cols-12 gap-x-16`}>
      <div className="col-span-7">
        <div className="text-5xl font-[bold] leading-normal">Información de la empresa</div>
        <div className="flex mt-6 text-3xl font-dark leading-[42px]">
          {manufacturer?.overall_rating ?? 0}
          <StarRating
            className="pl-2"
            rating={manufacturer?.overall_rating ?? 0}
            width={"30px"}
            height={"30px"}
          />
          <div className="text-lg font-bold leading-[42px] ml-2">Ver todas las reseñas</div>
        </div>
        <p className="mt-7 text-base font-semibold h-[169px] leading-[25.5px] tracking-[0.16px]">
          {manufacturer?.description}
        </p>
        <div className="mt-12 flex gap-2">
          <button className="rounded-[10px] px-5 text-base font-semibold h-[54px] border border-solid">
            Fundada en 2002
          </button>
          <button className="rounded-[10px]  px-5 text-base font-semibold h-[54px] border border-solid">
            100 - 200 Empleados
          </button>
          <button className="rounded-[10px]   px-5 text-base font-semibold h-[54px] border border-solid">
            425 clientes
          </button>
        </div>
        <div className="flex">
          <Button className="text-[#FFF] tracking-[0.16px] font-[Roboto] text-base font-semibold bg-[#26B9F1] w-[270px] h-[73px] rounded-[10px] mt-[78px]">
            <Image className="mr-2" src="/message-square.png" alt=" " width={24} height={24} />
            Ver información
          </Button>
          <Button className="ml-4 text-[#FFF] tracking-[0.16px] font-[Roboto] text-base font-semibold bg-[#26B9F1] w-[270px] h-[73px] rounded-[10px] mt-[78px]">
            <Image className="mr-2" src="/message-square.png" alt=" " width={24} height={24} />
            Ver información
          </Button>
        </div>
      </div>
      <div className="col-span-5">
        {/* <Image className=" " src="/map.svg" alt="" width={251} height={344} /> */}
        <div className="w-full">
          <div className="flex mt-[44px] gap-x-[33px]">
            <Image className="" src="/map-pin.svg" alt=" " width={24} height={24} />
            <p>
              Dirección:{" "}
              {`${manufacturer?.city}, ${manufacturer?.zip_code}, ${manufacturer?.state}, ${manufacturer?.city}`}
            </p>
          </div>
          <div className="pt-7 flex gap-x-[33px]">
            <Image className=" " src="/phone.svg" alt=" " width={24} height={24} />
            <p>Teléfono: {manufacturer?.phone_number}</p>
          </div>
          <div className="pt-7 flex gap-x-[33px]">
            
            <Image style={{fill: 'red'}} src="/mail.svg" alt=" " width={24} height={24} />
            <p>Email: {manufacturer?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
