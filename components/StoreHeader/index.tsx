import * as React from 'react';
import Image from 'next/image';
import StarRating from '@/components/StatRating/StarRating';

const StoreHeader: React.FunctionComponent<{ name:string, rating:number, products:number, customers:number }> = ({ name, rating, products, customers }) => {
  return (
    <div className="w-full bg-[#0860C6] ">
      <div className="container flex items-center justify-between mx-auto">
        <div className="items-center flex gap-x-6 text-[56px] font-bold leading-normal text-white">
          <Image src="/HSLogo.svg" alt="logo" width={64} height={64} />
          <div>{name}</div>
        </div>
        <div className="flex gap-x-6">
          <div className=" flex items-center text-3xl font-bold leading-normal text-white">
            {rating ?? 1}
            <StarRating
              className="pl-4"
              rating={rating ?? 1}
              width={'24px'}
              height={'24px'}
              color={'text-white'}
            />
          </div>
          <div className="flex w-fit items-center gap-x-6">
            <div className="text-3xl font-bold leading-normal text-white">
              {products}+
              <div className="text-base font-normal">Products</div>
            </div>
            <div className="bg-white w-[1px] rounded-sm block h-[64px]"></div>
            <div className="text-3xl font-bold leading-normal text-white">
              {customers}+
              <div className="text-base font-normal">Customers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreHeader;
