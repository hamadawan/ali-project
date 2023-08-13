import * as React from "react";
import { Input } from "../ui/input";
import Select from "../ui/Select";

const ProductPrice: React.FunctionComponent<{
  className: string;
  price: number;
  setPrice: Function;
  currency: number;
  setCurrency: Function;
}> = ({ className, price, setPrice, currency, setCurrency }) => {
  return (
    <div className={className}>
      <div className="font-[Raleway] text-2xl font-bold leading-8  mb-5 text-[#170F49]">Precio</div>
      <div className="w-100 p-7 min-h-[251px] rounded-[20px] bg-[#FFF] mt-5">
        <Input
          className="mb-4"
          required={true}
          type="number"
          id="price"
          label="Precio"
          name="price"
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
          placeholder="$ 0.00"
        />
        <label
          htmlFor="EStatus"
          className="block font-normal text-sm mb-2 leading-5 text-[#6F6C90]"
        >
          Moneda
        </label>
        <Select
          id="Moneda"
          required={true}
          name="Moneda"
          options={[{ name: "USD", value: "usd" }]}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          placeholder="Activo"
          className="w-full border px-4 py-4 mb-4 rounded-[10px] text-sm font-normal leading-5 bg-[#fff] border-[#D2DAE2] text-[#576D99] focus:border-[#D2DAE2] focus:outline-none"
        />
      </div>
    </div>
  );
};

export default ProductPrice;
