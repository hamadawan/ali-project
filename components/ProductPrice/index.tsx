import * as React from "react";
import { Input } from "../ui/input";

const ProductPrice: React.FunctionComponent = () => {
  return (
    <div className="mt-12">
      <div className="font-[Raleway] text-2xl font-bold leading-8  mb-5 text-[#170F49]">
        Precio
      </div>
      <div className="w-[750px] h-[251px] rounded-[20px] bg-[#FFF] mt-5">
        <div className="w-[700px] pt-4 pl-5">
          <div>
            <Input
              className="mb-11"
              required={true}
              type="number"
              id="price"
              label="Precio"
              name="price"
              placeholder="$ 0.00"
            />
          </div>
          <div>
            <Input
              className="mb-4"
              required={true}
              type="number"
              id="unit_price"
              label="Precio unitario"
              name="unit_price"
              placeholder="$ 0.00"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPrice;
