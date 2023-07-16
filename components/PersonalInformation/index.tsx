import * as React from "react";
import { Input } from "@/components/ui/input";

const PersonalInformation: React.FunctionComponent = () => {
  return (
    <div className="w-[469px] ml-[10px] ">
        <div className="mb-[10px] mt-8 flex justify-center"><img src="/useroctagon.svg" alt="" /></div>
        <div className="mb-[10px] text-center font-[Raleway] text-[32px] font-bold leading-[43px] text-[#170F49]">
            Crear tu cuenta
        </div>
        <div className="mb-[20px] text-center font-[Roboto] text-sm font-normal leading-[21px] text-[#6F6C90]">
            Lorem Ipsum dolor sit amet.
        </div>
          <div className="flex mb-5">
          <Input
              className="w-[225px] px-5 py-3 mr-[20px]"
              required={true}
              type="name"
              id="name"
              name="name"
              label={"Usuario*"}
              placeholder="Nombre de usuario"
            />
            <Input
              className="w-[225px] px-5 py-3"
              required={true}
              type="password"
              id="password"
              name="password"
              label={"Password*"}
              placeholder="Password"
            />
        </div>
            <Input
              className="mb-5"
              required={true}
              type="password"
              id="password"
              name="password"
              label={"Teléfono"}
              placeholder=""
            />
            <Input
              className="mb-8"
              required={true}
              type="password"
              id="password"
              name="password"
              label={"Correo Electrónico*"}
              placeholder="Escribe tu dirección de correo electrónico"
            />
            <button className="w-full px-12 py-4 rounded-[8px] bg-[#0860C6] font-[Roboto] text-sm font-medium leading-[21px] text-[#FFFFFF]">
             Crear Cuenta
            </button>
    </div>
  );
};

export default PersonalInformation;