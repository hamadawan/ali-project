import * as React from "react";
import { Input } from "../ui/input";

const ProductPrice: React.FunctionComponent<{
  className: string;
  price: number;
  setPrice: Function;
  unitPrice: number;
  setUnitPrice: Function;
}> = ({ className, price, setPrice, unitPrice, setUnitPrice }) => {
  return (
    <div className={className}>
      <div className="font-[Raleway] text-2xl font-bold leading-8  mb-5 text-[#170F49]">Precio</div>
      <div className="w-100 p-7 min-h-[251px] rounded-[20px] bg-[#FFF] mt-5">
        <Input
          className="mb-11"
          required={true}
          type="number"
          id="price"
          label="Precio"
          name="price"
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
          placeholder="$ 0.00"
        />
        <Input
          className="mb-4"
          required={true}
          type="number"
          id="unit_price"
          label="Precio unitario"
          name="unit_price"
          placeholder="$ 0.00"
          value={unitPrice}
          onChange={(e) => setUnitPrice(+e.target.value)}
        />
      </div>
    </div>
  );
};

export default ProductPrice;
