import * as React from 'react';
import Image from 'next/image';
import { Button } from '../../ui/button';
import StarRating from '@/components/StatRating/StarRating';
import { isPresent } from '@/utils/isPresent';
import Icon from '@/components/Icon';

const StoreInfo: React.FunctionComponent<{ manufacturer: any; className?: string }> = ({
  manufacturer,
  className,
}) => {
  return (
    <div className={`${className} container mx-auto grid grid-cols-12 gap-x-16`}>
      <div className="col-span-7">
        <div className="text-5xl leading-normal">Información de la empresa</div>
        <div className="flex mt-6 text-3xl font-dark leading-[42px]">
          {isPresent(manufacturer.overall_rating) && (
            <span className="flex">
              {manufacturer.overall_rating}
              <StarRating
                className="pl-2"
                rating={manufacturer?.overall_rating ?? 0}
                width={'30px'}
                height={'30px'}
              />
            </span>
          )}
        </div>
        <p className="mt-7 text-base font-semibold h-[169px] leading-[25.5px] tracking-[0.16px]">
          {manufacturer?.description}
        </p>
        <div className="mt-auto flex gap-2">
          <div className="rounded-[10px] px-5 text-base font-semibold h-[54px] border border-solid flex items-center">
            <span>Fundada en 2002</span>
          </div>
          <div className="rounded-[10px]  px-5 text-base font-semibold h-[54px] border border-solid flex items-center">
            <span>100 - 200 Empleados</span>
          </div>
          <div className="rounded-[10px]   px-5 text-base font-semibold h-[54px] border border-solid flex items-center">
            <span>425 clientes</span>
          </div>
        </div>
        <div className="flex">
          <Button className="text-[#FFF] tracking-[0.16px] text-base font-semibold bg-[#26B9F1] w-[270px] h-[73px] rounded-[10px] mt-[78px]">
            <Icon type="chat-alt" className="h-5 mr-2" />
            Ver información
          </Button>
          <Button className="ml-4 text-[#FFF] tracking-[0.16px] text-base font-semibold bg-[#26B9F1] w-[270px] h-[73px] rounded-[10px] mt-[78px]">
            <Icon type="chat-alt" className="h-5 mr-2" />
            Ver información
          </Button>
        </div>
      </div>
      <div className="col-span-5">
        <Image src="/map.svg" alt="" width={550} height={440} />
        <div className="w-full">
          <div className="flex items-center mt-[44px] gap-x-[33px]">
            <Icon type="location-marker" />
            <p>
              Dirección:{' '}
              {`${manufacturer?.city}, ${manufacturer?.zip_code}, ${manufacturer?.state}, ${manufacturer?.city}`}
            </p>
          </div>
          <div className="pt-7 items-center flex gap-x-[33px]">
            <Icon type="phone" />
            <p>Teléfono: {manufacturer?.phone_number}</p>
          </div>
          <div className="pt-7 items-center flex gap-x-[33px]">
            <Icon type="mail" />
            <p>Email: {manufacturer?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
