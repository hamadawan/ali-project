import * as React from 'react';

const ProductQuantityTable: React.FC = () => (
  <div className="flex gap-x-[60px] mt-7">
    <div className="text-base font-semibold text-secondary">
      2 - 49 Piezas
      <div className="text-2xl font-dark text-[#576D99]">$60.00</div>
    </div>
    <div className="text-base font-semibold text-secondary">
      50 - 99 Piezas
      <div className="text-2xl font-dark text-[#576D99]">$55.00</div>
    </div>
    <div className="text-base font-semibold text-secondary">
      +100 Piezas
      <div className="text-2xl font-dark text-[#576D99]">$45.00</div>
    </div>
  </div>
);

export default ProductQuantityTable;
