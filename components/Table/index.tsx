import * as React from 'react';

const Table: React.FunctionComponent<{ className?: string }> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="grid grid-cols-12 mt-8 border-collapse border-[#0860C6] rounded-xl">
        <div className="col-span-4 text-[#26B9F1] text-lg font-bold">
          <div className="border-t border-l border-[#0860C6] rounded-tl-xl text-center py-4">
            Model Number
          </div>
          <div className="border-t border-l border-[#0860C6] text-center py-4">Feature</div>
          <div className="border-t border-l border-[#0860C6] text-center py-4">Material</div>
          <div className="border-t border-l border-[#0860C6] text-center py-4">Design</div>
          <div className="border-t border-l border-[#0860C6] text-center py-4">Style</div>
          <div className="border-y border-l border-[#0860C6] text-center py-4 rounded-bl-xl">
            Collar
          </div>
        </div>
        <div className="col-span-8 text-[#0860C6] text-lg font-normal">
          <div className="border-t border-x border-[#0860C6] text-center py-4 rounded-tr-xl">
            AWZSW11
          </div>
          <div className="border-t border-x border-[#0860C6] text-center py-4">
            Sustainable, Breathable, Plus Size, Anti-wrinkle
          </div>
          <div className="border-t border-x border-[#0860C6] text-center py-4">
            52% cotton 40% polyester 8% spandex
          </div>
          <div className="border-t border-x border-[#0860C6] text-center py-4">round neck</div>
          <div className="border-t border-x border-[#0860C6] text-center py-4">Pullover</div>
          <div className="border-y border-x border-[#0860C6] text-center py-4 rounded-br-xl">
            O-Neck
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
