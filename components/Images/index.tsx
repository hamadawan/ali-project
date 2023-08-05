import * as React from "react";
import { Button } from "../ui/button";

const Images: React.FunctionComponent = () => {
  return (
    <div className="mt-8">
      <div className="font-[Raleway] text-2xl font-bold leading-8  mb-5 text-[#170F49]">
        Imágenes
      </div>
      <div className="w-[750px] h-[382px] rounded-[20px] bg-[#FFF] bg-[#FFF]">
        <div className="w-[700px] pl-[26px] pr-6">
          <Button variant="primary" className="mt-[26px] mb-3" type="submit">
            <img src="/camera.svg" alt="" className="mr-2" />
            Subir fotos
          </Button>
          <div className="w-full h-[174px] mb-8 rounded-[10px] border border-solid border-[#D2DAE2] bg-[#d2dae266]">
            <div className="border-dashed w-[ 646.055px] h-[133px] rounded-[7px] border border-[#A8B0B7] my-5 mx-5">
              <div className="font-[Plus Jakarta Sans] text-sm font-normal leading-[22px] tracking-[0.26px] text-[#6F6C90] flex justify-center items-center ">
                Arrastra tus archivos aquí
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
