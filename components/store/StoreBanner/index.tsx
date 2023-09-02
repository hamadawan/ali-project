import * as React from 'react';
import Image from 'next/image';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import StarRating from '@/components/StatRating/StarRating';

const StoreBanner: React.FunctionComponent = () => {
  return (
    <div className="min-h-[512px] relative rounded-lg">
      <div className='container bg-[url("/assets/store-banner.png")] bg-no-repeat bg-[size:100%_100%] absolute top-0 bottom-0 left-0 right-0 rounded-lg'></div>
      <div
        style={{ background: 'linear-gradient(90deg, #0860C6 0%, rgba(8, 96, 198, 0.00) 100%)' }}
        className="absolute top-0 bottom-0 left-0 right-0 rounded-lg"
      ></div>
      <div className="absolute top-0 bottom-0 left-0 right-0 p-24 rounded-lg">
        <div className="text-[64px] font-[bold] leading-[64px] text-[#FFFFFF]">HS Uniforms</div>
        <div className="flex mt-6 text-3xl font-dark leading-[42px] text-[#FFFFFF]">
          4.75
          <StarRating
            className="pl-4"
            rating={4}
            width={'24px'}
            height={'24px'}
            color={'text-white'}
          />
        </div>
        <div className="flex w-fit items-center mt-6 gap-x-6">
          <div className="text-3xl font-medium leading-normal text-[#FFFFFF]">
            50+
            <div className="text-lg">Products</div>
          </div>
          <div className="bg-white w-[1px] rounded-sm block h-[64px]"></div>
          <div className="text-3xl font-medium leading-normal text-[#FFFFFF]">
            100+
            <div className="text-lg">Customers</div>
          </div>
        </div>
        <div className="flex items-center pt-9 gap-x-5">
          <Button className="text-[#FFF] tracking-[0.16px] font-[Roboto] text-base font-semibold bg-[#26B9F1] w-[270px] h-[73px] rounded-[10px]">
            <Image className="mr-2" src="/message-square.svg" alt="" width={24} height={24} />
            Ver información
          </Button>
          <div className="relative">
            <Input
              className="w-[449px] h-[73.6px]"
              required={true}
              type=""
              name=""
              placeholder="¿Qué estás buscando?"
            />
            <div className="absolute top-2 right-2 p-5 rounded-[12px] bg-[#26B9F1]">
              <Image src="/Search.svg" alt="" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreBanner;
