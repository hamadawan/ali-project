import { useProductQuery } from "@/graphql/queries/useProductQuery";
import { CURRENCY_MAP } from "@/utils/helper";
import Image from "next/image";
import * as React from "react";

const ProductCard: React.FunctionComponent<{
  className?: string;
  id: number;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}> = ({ className, id, onClick }) => {
  const { data } = useProductQuery(id);
  const product = data?.product;
  console.log(data);
  return (
    <div className={`${className} rounded-lg`} onClick={onClick}>
      <div className="w-full flex flex-col justify-center items-center min-w-[280px] h-[363px] rounded-[20px] bg-[#FFFFFF] px-3 py-4">
        <Image src={product?.images?.[0] ?? "/assets/product.png"} alt="" width={260} height={260} />
      </div>
      <div className="mt-3 font-[DM Sans] text-lg font-medium leading-normal text-[#576D99]">
        {product?.name}
      </div>
      <div className="font-[DM Sans] text-lg font-medium leading-normal text-[#1e1e1e80]">
        {CURRENCY_MAP[product?.currency] ?? "$"}
        {product?.price}
      </div>
    </div>
  );
};

export default ProductCard;
