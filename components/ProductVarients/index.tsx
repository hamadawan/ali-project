import * as React from "react";
import { Input } from "../ui/input";

const ProductVarients: React.FunctionComponent = () => {
  return (
    <div>
      <div className="font-[Raleway] text-2xl font-bold leading-8 mb-5 text-[#170F49]">
        Variantes
      </div>
      <div className="w-[750px] h-[251px] rounded-[20px] bg-[#FFF] mt-5">
        <div className="w-[700px] pt-4 pl-5">
          <div>
            <Input
              className="mb-11"
              required={true}
              type="text"
              id="SKU"
              label="SKU"
              name="SKU"
              placeholder="PTF0068837"
            />
          </div>
          <div>
            <Input
              className="mb-4"
              required={true}
              type="number"
              id="available"
              label="Disponibles"
              name="available"
              placeholder="100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVarients;
