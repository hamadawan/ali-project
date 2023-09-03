import * as React from "react";
import Image from "next/image";
import { Button } from "../../ui/button";
import StarRating from "@/components/StatRating/StarRating";

const StoreInfo: React.FunctionComponent = () => {
  return (
    <div className="h-[763px] bg-[#0860C6] px-[36px] py-[76px]">
      <div className="container grid grid-cols-12 gap-x-4">
        <div className="col-span-6">
          <div className="text-5xl font-[bold] leading-normal text-[#FFFFFF]">
            Información de la empresa
          </div>
          <div className="flex mt-6 text-3xl font-dark leading-[42px] text-[#FFFFFF]">
            4.75
            <StarRating
              className="pl-2"
              rating={4}
              width={"30px"}
              height={"30px"}
            />
            <div className="text-lg font-bold leading-[42px] ml-2">
              Ver todas las reseñas
            </div>
          </div>
          <p className="text-[#FFFFFF] mt-7 text-base font-semibold w-[603px] h-[169px] leading-[25.5px] tracking-[0.16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            ultricies ipsum tortor, eu malesuada turpis sollicitudin at. Aliquam
            erat volutpat. Donec condimentum libero ut consequat elementum.
            Vivamus vehicula porttitor est ut congue. Aenean varius aliquam
            auctor. Integer sed mattis sapien. Praesent vestibulum blandit eros,
            id lacinia lacus porttitor at. Proin velit urna, vestibulum et urna
            nec, luctus posuere magna. Nunc ac commodo nulla.
          </p>
          <div className="mt-12 flex gap-2">
            <button className="rounded-[10px] text-base font-semibold text-[#FFF] w-[167px] h-[54px] border border-solid border-[#FFF] ">
              Fundada en 2002
            </button>
            <button className="rounded-[10px] text-base font-semibold text-[#FFF] w-[197px] h-[54px] border border-solid border-[#FFF] ">
              100 - 200 Empleados
            </button>
            <button className="rounded-[10px] text-base font-semibold text-[#FFF] w-[130px] h-[54px] border border-solid border-[#FFF] ">
              425 clientes
            </button>
          </div>
          <div className="flex">
            <Button className="text-[#FFF] tracking-[0.16px] font-[Roboto] text-base font-semibold bg-[#26B9F1] w-[270px] h-[73px] rounded-[10px] mt-[78px]">
              <Image
                className="mr-2"
                src="/message-square.png"
                alt=" "
                width={24}
                height={24}
              />
              Ver información
            </Button>
            <Button className="ml-4 text-[#FFF] tracking-[0.16px] font-[Roboto] text-base font-semibold bg-[#26B9F1] w-[270px] h-[73px] rounded-[10px] mt-[78px]">
              <Image
                className="mr-2"
                src="/message-square.png"
                alt=" "
                width={24}
                height={24}
              />
              Ver información
            </Button>
          </div>
        </div>
        <div className="ml-[48px] col-span-6">
          <Image className=" " src="/map.svg" alt="" width={551} height={344} />
          <div className="w-[448px] text-[#FFF]">
            <div className="flex mt-[44px] gap-x-[33px]">
              <Image
                className=""
                src="/map-pin.svg"
                alt=" "
                width={24}
                height={24}
              />
              <p>
                Dirección: Prol. 16 de Septiembre Manzana 008, Lazaro Cardenas,
                53560 Naucalpan de Juárez, Méx.
              </p>
            </div>
            <div className="pt-7 flex gap-x-[33px]">
              <Image
                className=" "
                src="/phone.svg"
                alt=" "
                width={24}
                height={24}
              />
              <p>Teléfono: 52 555 555 555</p>
            </div>
            <div className="pt-7 flex gap-x-[33px]">
              <Image
                className=""
                src="/mail.svg"
                alt=" "
                width={24}
                height={24}
              />
              <p>Email: correo@dominio.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
