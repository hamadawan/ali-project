import * as React from 'react';
import Image from 'next/image';

const Footer: React.FunctionComponent = () => {
  return (
    <div className="bg-[#170F49]">
      <div className="container w-full mx-auto py-[54px]">
        <div className="flex justify-center">
          <Image src="/puentify-logo.svg" alt="logo" width={194} height={50} />
        </div>
        <div className="flex justify-center gap-x-9 mt-8 text-white text-lg font-semibold">
          <div>Inicio</div>
          <div>Nosotros</div>
          <div>Precios y tarifas</div>
          <div>Contacto</div>
        </div>
        <div className="flex justify-center gap-x-5 mt-8">
          <div className="w-10 h-10 bg-secondary rounded-3xl flex justify-center items-center">
            <Image src="/facebook-icon.svg" alt="logo" width={16} height={16} />
          </div>
          <div className="w-10 h-10 bg-secondary rounded-3xl flex justify-center items-center">
            <Image src="/twitter-icon.svg" alt="logo" width={16} height={16} />
          </div>
        </div>
        <div className=" bg-primary h-[1px] mt-10"></div>
        <div className="text-base font-normal text-white flex justify-center mt-10">
          Puentify © 2023
        </div>
      </div>
    </div>
  );
};

export default Footer;
