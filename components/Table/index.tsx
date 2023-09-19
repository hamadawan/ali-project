import * as React from "react";

const Table: React.FunctionComponent = () => {
  return (
    <div className="mt-14">
      <div className="flex gap-x-8  text-[#0860C6] cursor-pointer text-2xl font-bold justify-center">
        <button className="focus:text-[#26B9F1] focus:border-[#DBDFE8] focus:border rounded-t-[20px]  p-4 ">
          Detalles del producto
        </button>
        <div className="hover:text-[#26B9F1] hover:border-[#DBDFE8] hover:border rounded-t-[20px]  p-4">
          Reseñas
        </div>
        <div className="hover:text-[#26B9F1]  hover:border-[#DBDFE8] hover:border rounded-t-[20px]  p-4">
          Información del fabricante
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-12 mt-8 border-collapse border-[#0860C6] rounded-xl">
        <div className="col-span-4 text-[#26B9F1] text-lg font-bold">
          <div className="border-t border-l border-[#0860C6] rounded-tl-xl text-center py-4">Model Number</div>
          <div className="border-t border-l border-[#0860C6] text-center py-4">Feature</div>
          <div className="border-t border-l border-[#0860C6] text-center py-4">Material</div>
          <div className="border-t border-l border-[#0860C6] text-center py-4">Design</div>
          <div className="border-t border-l border-[#0860C6] text-center py-4">Style</div>
          <div className="border-y border-l border-[#0860C6] text-center py-4 rounded-bl-xl">Collar</div>
        </div>
        <div className="col-span-8 text-[#0860C6] text-lg font-normal">
          <div className="border-t border-x border-[#0860C6] text-center py-4 rounded-tr-xl">AWZSW11</div>
          <div className="border-t border-x border-[#0860C6] text-center py-4">
            Sustainable, Breathable, Plus Size, Anti-wrinkle
          </div>
          <div className="border-t border-x border-[#0860C6] text-center py-4">
            52% cotton 40% polyester 8% spandex
          </div>
          <div className="border-t border-x border-[#0860C6] text-center py-4">round neck</div>
          <div className="border-t border-x border-[#0860C6] text-center py-4">Pullover</div>
          <div className="border-y border-x border-[#0860C6] text-center py-4 rounded-br-xl">O-Neck</div>
        </div>
      </div>
    </div>
  );
};

export default Table;
