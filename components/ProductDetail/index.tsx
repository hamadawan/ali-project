import * as React from "react";
import { Input } from "../ui/input";
import UserSelect from "../UserSelect";


const ProductDetail: React.FunctionComponent = () => {
  return (
    <div className="mt-9">
      <div className="font-[Raleway] text-2xl font-bold leading-8  mb-5 text-[#170F49]">
        Detalles del producto
      </div>
      <div className="w-[750px] h-[411px] rounded-[20px] bg-[#FFF]">
        <div className="w-[700px] pl-5 pt-7">
          <div>
            <Input
              className="mb-4"
              required={true}
              type="text"
              id="name"
              label="Nombre"
              name="name"
              placeholder="Nombre del producto"
            />
          </div>
          <div>
            <label
              htmlFor="Category"
              className="block font-normal text-sm mb-2 leading-5 text-[#6F6C90]"
            >
              Categoría
            </label>
            <UserSelect
              id="manufacturerUsers"
              required={true}
              name="manufacturerUsers"
              placeholder="Seleccionar categoría"
              className="w-full border px-4 py-4 mb-4 rounded-[10px] text-sm font-normal leading-5 bg-[#fff] border-[#D2DAE2] text-[#576D99] focus:border-[#D2DAE2] focus:outline-none"
            />
            <label
              htmlFor="Description"
              className="block font-normal text-sm mb-2 leading-5 text-[#6F6C90]"
            >
              Description
            </label>
            <textarea
              className="mb-4 w-full h-[130px] px-5 py-3 rounded-[10px] border border-solid border-[#D2DAE2]"
              required={true}
              id="name"
              name="name"
              placeholder="Description"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
