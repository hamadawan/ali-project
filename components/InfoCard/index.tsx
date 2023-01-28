import * as React from 'react';
import Image from "next/image";
import { InfoCardProps } from "@/components/InfoCard/InfoCard.intefaces";
import Icon from "@/components/Icon";
import {formatCurrency} from "@/utils/formatCurrency";
import Link from "next/link";

const InfoCard: React.FunctionComponent<InfoCardProps> = ({
  id,
  thumbnail,
  title,
  description,
  price,
  rating,
  manufacturer,
  url,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) onClick(id);
  };

  return (
    <Link href={url}>
    <div
      onClick={handleClick}
      className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out"
    >
        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
          <Image src={thumbnail} fill className="rounded-2xl" alt={title} />
        </div>

        <div className="flex flex-col flex-grow pl-5">
          <div className="flex justify-between">
            <p>{ manufacturer }</p>
            <Icon type='heart' className="h-5" />
          </div>
          <h4 className="text-xl">{ title }</h4>
          <div className="border-b w-10 pt-2" />
          <p className="pt-2 text-sm text-gray-500 flex-grow">{ description }</p>
          <div className="flex  justify-between">
            <p className="flex items-center">
              <Icon type="star" className="h-5 text-red-400" />
              <span className="text-gray-500 pl-1">{ rating }</span>
            </p>
            <div>
              <p className="text-lg font-semibold lg:text-2xl">{formatCurrency(price)}</p>
            </div>
          </div>
        </div>
    </div>
      </Link>
  );
};

export default InfoCard;
