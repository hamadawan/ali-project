import * as React from 'react';
import Image from 'next/image';
import Select from '../../ui/Select';
import { Button } from '../../ui/button';
import Breadcrumb from '@/components/Breadcrumb';
import UserReview from '@/components/UserReview';

const AboutProduct: React.FunctionComponent = () => {
  return (
    <div className="w-full">
      <Breadcrumb options={['Home', 'Sales', 'Hoodie']} />
      <div className="float-left">
        <Image className="mt-7" src="/T-shirt.svg" alt="" width={523} height={523} />
        <div className="flex gap-x-6 mt-6">
          <div className="w-[159px] h-[163px] rounded-[20px] px-5 py-3">
            <Image src="/t-shirt1.svg" alt="" width={120} height={137} />
          </div>
          <div className="w-[159px] h-[163px] rounded-[20px] px-5 py-3">
            <Image src="/t-shirt2.svg" alt="" width={120} height={137} />
          </div>
          <div className="w-[159px] h-[163px] rounded-[20px] px-5 py-3">
            <Image src="/t-shirt3.svg" alt="" width={120} height={137} />
          </div>
        </div>
      </div>
      <div className="w-[648.41px] h-[453.6px] float-right mt-[55px]">
        <div className="text-[#170F49] font-[DM Sans] text-[42px] font-bold leading-[42px] tracking-[0.42px]">
          Playera de polyester
        </div>
        <div className="mt-6 font-[DM Sans] text-base font-medium uppercase text-[#26B9F1]">
          DE STORE NAME
        </div>
        <p className="mt-7 font-[DM Sans] text-lg font-normal leading-normal w-[] text-[#576D99]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et est quam. Duis sit amet
          imperdiet odio. Donec eget semper lacus, eget convallis dolor.
        </p>
        <div className="flex gap-x-[60px] mt-7">
          <div className="font-[Roboto] text-base font-semibold leading-[42px] text-[#26B9F1]">
            2 - 49 Piezas
            <div className="text-2xl font-dark text-[#576D99]">$60.00</div>
          </div>
          <div className="font-[Roboto] text-base font-semibold leading-[42px] text-[#26B9F1]">
            50 - 99 Piezas
            <div className="text-2xl font-dark text-[#576D99]">$55.00</div>
          </div>
          <div className="font-[Roboto] text-base font-semibold leading-[42px] text-[#26B9F1]">
            +100 Piezas
            <div className="text-2xl font-dark text-[#576D99]">$45.00</div>
          </div>
        </div>
        <div className="flex gap-x-6 mt-9">
          <div className="font-[Roboto] text-[#7D7D7D] text-base font-semibold uppercase text-center pt-3 w-[103px] h-[74px] rounded-[10px] border border-solid border-[#00000033]">
            CANTIDAD
            <Select required={true} id="cantidad" type="number" className="border-none" />
          </div>
          <div className="font-[Roboto] text-[#7D7D7D] text-base font-semibold uppercase text-center pt-3 w-[103px] h-[74px] rounded-[10px] border border-solid border-[#00000033] ">
            COLOR
            <Select required={true} id="color" type="text" className="border-none" />
          </div>
          <div className="font-[Roboto] text-[#7D7D7D] text-base font-semibold uppercase text-center pt-3 w-[103px] h-[74px] rounded-[10px] border border-solid border-[#00000033]">
            Talla
            <Select required={true} id="talla" type="text" className="border-none" />
          </div>
          <Button className="w-[270px] h-[73.6px] text-white mb-[97px]">Quiero esto</Button>
        </div>
        <hr />
        <UserReview
          name={'Abcd'}
          rating={4}
          review={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex non magna tristique pharetra a quis libero. Donec imperdiet justo sapien, vel tincidunt ante aliquet quis.'
          }
        />
        <div className="float-right mt-5 font-[DM sans] text-lg font-medium leading-normal text-[#26B9F1]">
          View all reviews
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
