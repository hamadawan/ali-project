import * as React from 'react';
import Image from "next/image";
import { formatCurrency } from "@/utils/formatCurrency";
import { SmallCardProps } from "@/components/SmallCard/SmallCard.interfaces";
import Link from "next/link";

const SmallCard: React.FunctionComponent<SmallCardProps> = ({
  img,
  title,
  description,
  price,
  url,
}) => {
  return (
    <Link href={url}>
      <div
        className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out"
      >
        <div className="relative h-16 w-16">
          <Image src={img} fill className="rounded-lg" alt="Location image" />
        </div>
        <div>
          <h2>{title}</h2>
          <h3 className="text-gray-400">{formatCurrency(price)}</h3>
        </div>
      </div>
    </Link>
  )
};

export default SmallCard;
