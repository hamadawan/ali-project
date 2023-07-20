import * as React from "react";
import { Input } from "../ui/input";

const ManufacturerInformation: React.FunctionComponent = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[800px] bg-[#FFF] rounded-[20px] px-[50px] py-[49px]">
        <div className="w-[700px] ml-2">
          <form action="">
            <div className="mb-[46px] text-center font-sans text-[32px] font-medium leading-[28px] text-[#26B9F1]">
              Comienza a vender
            </div>
            <div className="mb-[17px] text-center font-[Raleway] text-lg font-normal leading-[22px] text-[#5F6F81]">
              1 de 4 Tareas completadas
            </div>
            <div className="mb-[37px] w-full h-4 rounded-[16px] bg-[#F1F1F1]"><div className="w-[175px] bg-[#26B9F1] h-[17.5px] rounded-l-[16px]"></div></div>
            <hr />
            <div className="mt-10 mb-[25px] font-[Raleway] text-2xl font-bold leading-[31.922px] text-[#170F49]">
              1 · Información de fabricante
              <div className="w-[14px] h-[3px] bg-[#170F49] float float-right rounded-[2px] mt-3"></div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor=""
                  className="block mb-2 font-[Raleway] text-sm font-normal leading-[21px] text-[#6F6C90]"
                >
                  Nombre de la empresa
                </label>
                <Input
                  required={true}
                  type="Nombre de la empresa"
                  id="Nombre de la empresa"
                  name="Nombre de la empresa"
                  placeholder="Introducir nombre de la empresa"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block mb-2 font-[Raleway] text-sm font-normal leading-[21px] text-[#6F6C90]"
                >
                  Nombre de contácto
                </label>
                <input
                  required={true}
                  type="Nombre de contácto"
                  id="Nombre de contácto"
                  name="Nombre de contácto"
                  placeholder="Nombre completo"
                  className="w-[340px] px-5 py-[15px]  border border-solid rounded-[10px] border-[#D2DAE2] "
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className=" block mb-2 font-[Raleway] text-sm font-normal leading-[21px] text-[#6F6C90]"
                >
                  Tamaño de la empresa
                </label>
                <input
                  required={true}
                  type="Tamaño de la empresa"
                  id="Tamaño de la empresa"
                  name="Tamaño de la empresa"
                  placeholder="Mediana"
                  className="w-[340px] px-5 py-[15px]  border border-solid rounded-[10px] border-[#D2DAE2] "
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block mb-2 font-[Raleway] text-sm font-normal leading-[21px] text-[#6F6C90]"
                >
                  Industria
                </label>
                <input
                  required={true}
                  type="Industria"
                  id="Industria"
                  name="Industria"
                  placeholder="Textil"
                  className="w-[340px] px-5 py-[15px]  border border-solid rounded-[10px] border-[#D2DAE2] "
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className=" block mb-2 font-[Raleway] text-sm font-normal leading-[21px] text-[#6F6C90]"
                >
                  Ubicación
                </label>
                <input
                  required={true}
                  type="Ubicación"
                  id="Ubicación"
                  name="Ubicación"
                  placeholder="Textil"
                  className="w-[340px]  px-5 py-[15px]  border border-solid rounded-[10px] border-[#D2DAE2] "
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block mb-2 font-[Raleway] text-sm font-normal leading-[21px] text-[#6F6C90]"
                >
                  Año de funcionamiento
                </label>
                <input
                  required={true}
                  type="Año de funcionamiento"
                  id="Año de funcionamiento"
                  name="Año de funcionamiento"
                  placeholder="Textil"
                  className="w-[340px] px-5 py-[15px]  border border-solid rounded-[10px] border-[#D2DAE2] "
                />
              </div>
            </div>
            <button className="w-full mt-5 mb-[31px] max-w-[700px] h-[53px] px-12 py-4  rounded-[8px] bg-[#0860C6] font-[Roboto] text-sm font-medium leading-[21px] text-[#FFFFFF]    ">
              Guardar
            </button>
            <hr />
            <div className="mt-10 font-[Raleway] text-2xl font-bold leading-[31.992px] text-[#170F49]">
              2 · Url de la tienda
              <div className="w-[14px] h-[3px] bg-[#170F49] float float-right rounded-[2px] mt-3"></div>
            </div>
            <div className="mt-[25px] font-[Roboto] text-sm font-extrabold leading-[21px] text-[#170F49]">
              https://www.puentify.com/
              <span className="font-normal text-[#0860C6]">
                nombre-de-mi-tienda
              </span>
            </div>
            <input
              required={true}
              type="email"
              id="email"
              name="email"
              placeholder="nombre-de-mi-tienda"
              className="w-full mt-2 px-5 py-[15px]  border border-solid rounded-[10px] border-[#D2DAE2] "
            />
            <button className="mt-5 w-full max-w-[700px] h-[53px] px-12 py-4  rounded-[8px] bg-[#A9C3E2] font-[Roboto] text-sm font-medium leading-[21px] text-[#FFFFFF]    ">
              Agregar dominio personalizado
            </button>
            <button className="mt-5 mb-[31px] w-full max-w-[700px] h-[53px] px-12 py-4  rounded-[8px] bg-[#0860C6] font-[Roboto] text-sm font-medium leading-[21px] text-[#FFFFFF]    ">
              Guardar
            </button>
            <hr />
            <div className="mt-10 font-[Raleway] text-2xl font-bold leading-[31.992px] text-[#170F49]">
              3 · Publicar tu primer producto
              <div className="w-[14px] h-[3px] bg-[#170F49] float float-right rounded-[2px] mt-3"></div>
            </div>
            <button className="mt-[25px] mb-[31px] w-full max-w-[700px] h-[53px] px-12 py-4  rounded-[8px] bg-[#0860C6] font-[Roboto] text-sm font-medium leading-[21px] text-[#FFFFFF]    ">
              Agregar primer producto
            </button>
            <hr />
            <div className="mt-10 font-[Raleway] text-2xl font-bold leading-[31.992px] text-[#170F49]">
              4 · Publicar tienda
              <div className="w-[14px] h-[3px] bg-[#170F49] float float-right rounded-[2px] mt-3"></div>
            </div>
            <button className="mt-[25px] w-full max-w-[700px] h-[53px] px-12 py-4  rounded-[8px] bg-[#7DF0CE] font-[Roboto] text-sm font-medium leading-[21px] text-[#085840]">
              Publicar ahora
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManufacturerInformation;
