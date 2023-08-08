import * as React from "react";
import { Input } from "../ui/input";
import Image from "next/image";

const Varients: React.FunctionComponent = () => {
  const [options, setOptions] = React.useState([{name: "Color 1", value: "#456765", price: 123}])
  
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
          {
            options.map(option => {
              return <div className="flex flex-row gap-5">
                <Input
                  required={true}
                  type="Option"
                  id="Option"
                  label="Opciones 1"
                  name="Option"
                  placeholder="color 1"
                  value={option.name}
                />
                <div className="relative">
                  <Input
                    className="pl-12"
                    required={true}
                    type="Worth"
                    id="Worth"
                    label="Valor"
                    name="Worth"
                    placeholder=""
                    value={option.value}
                  />
                  <div className="absolute left-4 top-11 w-5 h-5 rounded-[5px]" style={{background: option.value}}></div>
                </div>
                <Input
                  required={true}
                  type="Price"
                  id="Price"
                  label="Precio"
                  name="Price"
                  placeholder="$10.00"
                />
                <Image src="/bin.svg" alt="" width={21} height={20} />
              </div>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Varients;
