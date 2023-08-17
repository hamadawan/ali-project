import * as React from 'react';
import { Input } from '../ui/input';

const ProductVarients: React.FunctionComponent<{
  className: string;
  SKU: string;
  setSKU: Function;
  available: number;
  setAvailable: Function;
}> = ({ className, SKU, setSKU, available, setAvailable }) => {
  return (
    <div className={className}>
      <div className="font-[Raleway] text-2xl font-bold leading-8  mb-5 text-[#170F49]">
        Variantes
      </div>
      <div className="w-100 min-h-[251px] p-7 rounded-[20px] bg-[#FFF] mt-5">
        <Input
          className="mb-11"
          required={true}
          type="text"
          id="SKU"
          label="SKU"
          name="SKU"
          value={SKU}
          onChange={(e) => setSKU(e.target.value)}
          placeholder="PTF0068837"
        />
        <Input
          className="mb-4"
          required={true}
          type="number"
          id="available"
          label="Disponibles"
          name="available"
          value={available}
          onChange={(e) => setAvailable(+e.target.value)}
          placeholder="100"
        />
      </div>
    </div>
  );
};

export default ProductVarients;
