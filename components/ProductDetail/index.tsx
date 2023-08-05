import * as React from "react";
import { Input } from "../ui/input";
import UserSelect from "../UserSelect";
import Select from "../ui/Select";

const ProductDetail: React.FunctionComponent<{
  className: string;
  name: string;
  setName: Function;
  category: string;
  setCategory: Function;
  description: string;
  setDescription: Function;
  categories: { name: string; value: string }[];
}> = ({
  className,
  name,
  setName,
  category,
  setCategory,
  description,
  setDescription,
  categories,
}) => {
  return (
    <div className={className}>
      <div className="font-[Raleway] text-2xl font-bold leading-8 mb-5 text-[#170F49]">
        Detalles del producto
      </div>
      <div className="w-100 p-7 h-[411px] rounded-[20px] bg-[#FFF]">
        <Input
          className="mb-4"
          required={true}
          type="text"
          id="name"
          label="Nombre"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Nombre del producto"
        />
        <div>
          <label
            htmlFor="Category"
            className="block font-normal text-sm mb-2 leading-5 text-[#6F6C90]"
          >
            Categoría
          </label>
          <Select
            id="category"
            required={true}
            name="category"
            placeholder="Seleccionar categoría"
            value={category}
            options={categories}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border px-4 py-4 mb-4 rounded-[10px] text-sm font-normal leading-5 bg-[#fff] border-[#D2DAE2] text-[#576D99] focus:border-[#D2DAE2] focus:outline-none"
          />
        </div>
        <div>
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
