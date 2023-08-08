import * as React from "react";
import { Input } from "../ui/input";
import Image from "next/image";

const Varients: React.FunctionComponent = () => {
  return (
    <div className="">
      <div className="font-[Raleway] text-2xl font-bold leading-8  mb-5 text-[#170F49]">
        Variantes
      </div>
      <div className="w-100 min-h-[467px] p-7 rounded-[20px] bg-[#FFF] ">
        <Input
          className="mb-4"
          required={true}
          type="Color"
          id="Color"
          label="Nombre variante"
          name="Color"
          placeholder="Color"
        />
        <div className="font-[DM Sans] font-medium text-2xl leading-[28px] text-[#26B9F1] mb-5">
          Opciones
        </div>
        <div>
          <div className="grid grid-cols-3 gap-5">
            <Input
              required={true}
              type="Option"
              id="Option"
              label="Opciones 1"
              name="Option"
              placeholder="color 1"
            />
            <div>
              <Input
                className=""
                required={true}
                type="Worth"
                id="Worth"
                label="Valor"
                name="Worth"
                placeholder=""
              />
              <div className="bg-[#EB232A] w-5 h-5 rounded-[5px]  ml-2 mt-1"></div>
            </div>
            <Input
              required={true}
              type="Price"
              id="Price"
              label="Precio"
              name="Price"
              placeholder="$10.00"
            />
             {/* <Image src="/bin.svg" alt="" width={21} height={20} /> */}
            <Input
              required={true}
              type="Option"
              id="Option"
              label="Opciones 1"
              name="Option"
              placeholder="color 1"
            />
            <div>
              <Input
                required={true}
                type="Worth"
                id="Worth"
                label="Valor"
                name="Worth"
                placeholder="#7242f5"
              />
              <div className="bg-[#7242F5] w-5 h-5 rounded-[5px]  ml-2 mt-1"></div>
            </div>
            <Input
              required={true}
              type="Price"
              id="Price"
              label="Precio"
              name="Price"
              placeholder="$10.00"
            />

            <Input
              required={true}
              type="Option"
              id="Option"
              label="Opciones 1"
              name="Option"
              placeholder="color 1"
            />
            <div>
              <Input
                required={true}
                type="Worth"
                id="Worth"
                label="Valor"
                name="Worth"
                placeholder="#acdb79"
              />
              <div className="bg-[#ACDB79] w-5 h-5 rounded-[5px]  ml-2 mt-1"></div>
            </div>
            <Input
              required={true}
              type="Price"
              id="Price"
              label="Precio"
              name="Price"
              placeholder="$10.00"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Varients;
