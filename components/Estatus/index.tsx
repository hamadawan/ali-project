import * as React from "react";
import { Input } from "../ui/input";
import Select from "../ui/Select";

const Footer: React.FunctionComponent = () => {
  return (
    <div>
      <div className="font-[Raleway] text-2xl font-bold leading-8  mb-5 text-[#170F49]">
        Estatus
      </div>
      <div className="w-100 min-h-[131px] p-7 rounded-[20px] bg-[#FFF] ">
          <label
            htmlFor="Category"
            className="block font-normal text-sm mb-2 leading-5 text-[#6F6C90]"
          >
            Estatus
          </label>
          <Select 
          id="Estatus"
          required={true}
          name="Estatus"
          placeholder="Activo"
          className="w-full border px-4 py-4 mb-4 rounded-[10px] text-sm font-normal leading-5 bg-[#fff] border-[#D2DAE2] text-[#576D99] focus:border-[#D2DAE2] focus:outline-none"
          />
          
      </div>
    </div>
  );
};

export default Footer;
