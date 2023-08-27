import Image from 'next/image';
import * as React from 'react';

const ProductCard: React.FunctionComponent<{
  className?: string;
  name: string;
  image: string;
}> = ({ className, name, image = '/shirt-img.svg' }) => {
  return (
    <div className={`${className} rounded-lg`}>
      <div className="w-full flex flex-col justify-center items-center min-w-[280px] h-[363px] rounded-[20px] bg-[#FFFFFF] px-3 py-4">
        <Image src={image} alt="" width={260} height={260} />
      </div>
      <div className="mt-3 font-[DM Sans] text-lg font-medium leading-normal text-[#576D99]">
        {name}
      </div>
      <div className="font-[DM Sans] text-lg font-medium leading-normal text-[#1e1e1e80]">
        $60.00 - $120.00
      </div>
    </div>
  );
};

export default ProductCard;
